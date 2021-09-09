import React from "react";
import LoginScreen from "src/screens/auth/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
  </Stack.Navigator>
);
