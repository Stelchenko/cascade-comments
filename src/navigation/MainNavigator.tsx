import React, { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";
import { LoginContainer } from "@screens/LoginScreen";
import { RegistrationContainer } from "@screens/RegistrationScreen";

export const MainNavigator = (): ReactElement => {
  const { Navigator, Screen } =
    createNativeStackNavigator<MainStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Screens.Login} component={LoginContainer} />
      <Screen name={Screens.Registration} component={RegistrationContainer} />
    </Navigator>
  );
};
