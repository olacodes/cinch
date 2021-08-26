import React from "react";
import { StatusBar } from "react-native";
import Walkthrough from "./src/screens/walkthrough/walkthrough";
import Walkthrough2 from "./src/screens/walkthrough2";
import LoadingPage from "./src/screens/loading";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_900Black });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Loading"
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
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" barStyle="light-content" />
      </ThemeProvider>
    );
  }
}
