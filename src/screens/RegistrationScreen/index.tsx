import React, { useState } from "react";
import { RegistrationScreen } from "@screens/RegistrationScreen/RegistrationScreen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";

export const RegistrationContainer = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

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
    />
  );
};
