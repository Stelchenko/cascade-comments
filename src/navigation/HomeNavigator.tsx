import React, { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "@navigation/types";
import { Screens } from "@navigation/routes";
import { HomeContainer } from "@screens/HomeScreen";

export const HomeNavigator = (): ReactElement => {
  const { Navigator, Screen } =
    createNativeStackNavigator<HomeStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Screens.Home} component={HomeContainer} />
    </Navigator>
  );
};
