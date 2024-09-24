import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthButton, CustomInput } from "@components";
import { styles } from "@screens/LoginScreen/styles";

type RegistrationScreenProps = {
  userName: string;
  setUserName: (userName: string) => void;
  password: string;
  setPassword: (password: string) => void;
  email: string;
  setEmail: (email: string) => void;
  goToLoginHandler: () => void;
  registrationHandler: () => void;
};

export const RegistrationScreen: React.FC<RegistrationScreenProps> = (
  props,
) => {
  const {
    setPassword,
    password,
    email,
    setEmail,
    userName,
    setUserName,
    goToLoginHandler,
    registrationHandler,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <CustomInput
        placeholder='Username'
        value={userName}
        onChange={setUserName}
      />
      <CustomInput placeholder='Email' value={email} onChange={setEmail} />
      <CustomInput
        placeholder='Password'
        value={password}
        onChange={setPassword}
        secure
      />
      <AuthButton onPress={registrationHandler} title={"Continue"} />
      <TouchableOpacity onPress={goToLoginHandler}>
        <Text>Go to sign in</Text>
      </TouchableOpacity>
    </View>
  );
};
