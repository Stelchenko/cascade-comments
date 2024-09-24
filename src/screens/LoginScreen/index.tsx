import React, { useState } from "react";
import { LoginScreen } from "@screens/LoginScreen/LoginScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";

export const LoginContainer = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const goToRegistrationHandler = () => {
    navigation.navigate(Screens.Registration);
  };

  return (
    <LoginScreen
      goToRegistrationHandler={goToRegistrationHandler}
      email={email}
      setEmail={setEmail}
      setPassword={setPassword}
      password={password}
    />
  );
};
