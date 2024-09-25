import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { RealmProvider } from "@realm/react";
import { schemas } from "./src/realm/entity";
import { AuthGuard } from "@navigation/AuthGuard";
import { AuthProvider } from "./src/auth/AuthContext";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RealmProvider deleteRealmIfMigrationNeeded schema={schemas}>
        <AuthProvider>
          <NavigationContainer>
            <AuthGuard />
          </NavigationContainer>
        </AuthProvider>
      </RealmProvider>
    </SafeAreaView>
  );
}

export default App;
