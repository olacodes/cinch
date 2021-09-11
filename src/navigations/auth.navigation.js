import React from "react";
import LoginScreen from "src/screens/auth/login";
import RegisterScreen from "src/screens/auth/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyScreen from "src/screens/verify/verify.screen";

const Stack = createNativeStackNavigator();
const screenOptionsStyle = {
  headerShown: false,
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export const AuthNavigation = () => (
  <Stack.Navigator initialRouteName="login" screenOptions={screenOptionsStyle}>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="register" component={RegisterScreen} />
    <Stack.Screen name="verify" component={VerifyScreen} />
  </Stack.Navigator>
);
