import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigation } from "./auth.navigation";
import LoadingPage from "src/screens/loading";
import { WalkthroughNavigation } from "./walkthrough.navigation";
import { DashboardNavigation } from "./dashboard.navigation";

const Stack = createNativeStackNavigator();

const screenOptionsStyle = {
  headerShown: false,
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export const RootNavigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Walkthrough"
        screenOptions={screenOptionsStyle}
      >
        <Stack.Screen name="Walkthrough" component={WalkthroughNavigation} />
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen name="Dashboard" component={DashboardNavigation} />
        <Stack.Screen name="Loading" component={LoadingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
