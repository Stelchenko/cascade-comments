import React, { useCallback, useState } from "react";
import { LoginScreen } from "@screens/LoginScreen/LoginScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Screens } from "@navigation/routes";
import { AuthStackParamsList } from "@navigation/types";
import { useQuery } from "@realm/react";
import { User } from "../../realm/entity/User";
import { validateEmail } from "../../utils/validators";
import { Alert } from "react-native";
import { useAuth } from "../../auth/useAuth";

export const LoginContainer = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const users = useQuery(User);
  const auth = useAuth();
  const navigation = useNavigation<NavigationProp<AuthStackParamsList>>();

  const goToRegistrationHandler = () => {
    navigation.navigate(Screens.Registration);
  };

  const loginHandler = useCallback((): void => {
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      Alert.alert("Please enter a valid e-mail address");
      return;
    }

    const existingUser = users.find(
      (item) => item.email === email && item.password === password,
    );
    if (!existingUser) {
      Alert.alert("Invalid email or password");
      return;
    }

    auth.signIn(existingUser);
  }, [email, password]);

  return (
    <LoginScreen
      goToRegistrationHandler={goToRegistrationHandler}
      email={email}
      setEmail={setEmail}
      setPassword={setPassword}
      password={password}
      loginHandler={loginHandler}
    />
  );
};
