import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_300Light,
  Roboto_900Black,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { Navigation } from "./src/navigations";
import { PersistGate } from "redux-persist/integration/react";

import getStore from "./src/redux/store";
export const { store, persistor } = getStore();

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black,
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Navigation />
            <StatusBar style="auto" barStyle="light-content" />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
};

export default () => {
  return <App />;
};
