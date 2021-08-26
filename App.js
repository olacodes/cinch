import React from "react";
import { StatusBar } from "react-native";
import Walkthrough from "./src/screens/walkthrough";
import Walkthrough2 from "./src/screens/walkthrough2";
import LoadingPage from "./src/screens/loading";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({ Lato_400Regular });
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
