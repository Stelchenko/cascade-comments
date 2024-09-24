import React, { ReactElement } from "react";

import { AuthNavigator } from "@navigation/AuthNavigator";
import { HomeNavigator } from "@navigation/HomeNavigator";
import { useAuth } from "../auth/useAuth";

export const AuthGuard = (): ReactElement => {
  const auth = useAuth();

  return auth.user ? <HomeNavigator /> : <AuthNavigator />;
};
