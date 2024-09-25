import React, { useCallback, useState } from "react";
import { RegistrationScreen } from "@screens/RegistrationScreen/RegistrationScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Screens } from "@navigation/routes";
import { useQuery, useRealm } from "@realm/react";
import { User } from "../../realm/entity/User";
import { Alert } from "react-native";
import { validateEmail } from "../../utils/validators";
import { useAuth } from "../../auth/useAuth";
import { AuthStackParamsList } from "@navigation/types";

export const RegistrationContainer = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const auth = useAuth();
  const navigation = useNavigation<NavigationProp<AuthStackParamsList>>();

  const realm = useRealm();
  const users = useQuery(User);

  const registrationHandler = useCallback((): void => {
    if (password.length < 5) {
      Alert.alert("Password length must be at least 5 characters long");
      return;
    }

    if (userName.length < 5) {
      Alert.alert("Username length must be at least 5 characters long");
      return;
    }

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      Alert.alert("Please enter a valid e-mail address");
      return;
    }

    const isUserExist = users.find((item) => item.email === email);
    if (isUserExist) {
      Alert.alert("This user already exists");
      return;
    }

    realm.write(() => {
      const user = new User(realm, { email, userName, password });
      auth.signIn(user);
      return user;
    });
  }, [realm, email, userName, password]);

  const handleUserName = (userName: string) => {
    const result = userName.replace(/[^A-Za-z0-9]/gi, "");
    setUserName(result);
  };

  const goToLoginHandler = () => {
    navigation.navigate(Screens.Login);
  };

  return (
    <RegistrationScreen
      userName={userName}
      setUserName={handleUserName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      goToLoginHandler={goToLoginHandler}
      registrationHandler={registrationHandler}
    />
  );
};
