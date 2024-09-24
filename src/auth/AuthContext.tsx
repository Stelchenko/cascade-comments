import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { User } from "../realm/entity/User";
import {
  clearStorage,
  getStorageUserData,
  setStorageUserData,
} from "../utils/asyncStorage";

export type AuthContextData = {
  user?: User;
  signIn: (user: User) => void;
  signOut(): void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    try {
      getStorageUserData().then((res) => setUser(res));
    } catch (error) {
      console.info("loadStorageData error:", error);
    }
  }, []);

  const signIn = (user: User) => {
    setUser(user);
    setStorageUserData(user);
  };

  const signOut = () => {
    clearStorage();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signOut,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
