import React from "react";
import Walkthrough from "../screens/walkthrough/walkthrough";
import Walkthrough2 from "../screens/walkthrough2";
import LoginScreen from "../screens/login/login";
import LoadingPage from "../screens/loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Loading"
        component={LoadingPage}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="Walkthrough"
        component={Walkthrough}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="Walkthrough2"
        component={Walkthrough2}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
