import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../realm/entity/User";

export const getStorageUserData = async () => {
  const jsonValue = await AsyncStorage.getItem("user");
  return jsonValue != null ? (JSON.parse(jsonValue) as User) : undefined;
};

export const setStorageUserData = async (user: User) => {
  const jsonValue = JSON.stringify(user);
  await AsyncStorage.setItem("user", jsonValue);
};

export const clearStorage = async () => {
  AsyncStorage.clear();
};
