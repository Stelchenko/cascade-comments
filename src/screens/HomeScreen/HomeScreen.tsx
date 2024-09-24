import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../auth/useAuth";

export const HomeScreen = () => {
  const auth = useAuth();
  return (
    <View>
      <TouchableOpacity onPress={auth.signOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
