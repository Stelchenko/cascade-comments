import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthButton, CustomInput } from "@components";
import { styles } from "./styles";

type LoginScreenProps = {
  password: string;
  setPassword: (password: string) => void;
  email: string;
  setEmail: (email: string) => void;
  goToRegistrationHandler: () => void;
  loginHandler: () => void;
};

export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const {
    setPassword,
    password,
    email,
    setEmail,
    goToRegistrationHandler,
    loginHandler,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <CustomInput placeholder='Email' value={email} onChange={setEmail} />
      <CustomInput
        placeholder='Password'
        value={password}
        onChange={setPassword}
        secure
      />
      <AuthButton onPress={loginHandler} title={"Continue"} />
      <TouchableOpacity onPress={goToRegistrationHandler}>
        <Text style={styles.text}>Go to sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
