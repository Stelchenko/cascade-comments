import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "@navigation/MainNavigator";
import { SafeAreaView } from "react-native";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
