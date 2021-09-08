import React from "react";
import Walkthrough from "../screens/walkthrough/walkthrough";
import Walkthrough2 from "../screens/walkthrough2";
import LoginScreen from "../screens/login/login";
import LoadingPage from "../screens/loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loading"
        screenOptions={{
          headerShown: false,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Walkthrough2" component={Walkthrough2} />
        <Stack.Screen name="login">
          {() => (
            <Tab.Navigator
              screenOptions={{ headerShown: false }}
              tabBar={() => null}
            >
              <Tab.Screen name="login" component={LoginScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
