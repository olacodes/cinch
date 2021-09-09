import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstWalkthrough from "src/screens/walkthrough/firstWalkthrough";
import SecondWalkthrough from "src/screens/walkthrough/secondWalkthrough";

const screenOptionsStyle = {
  headerShown: false,
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
const Stack = createNativeStackNavigator();

export const WalkthroughNavigation = () => (
  <Stack.Navigator
    initialRouteName="FirstWalkthrough"
    screenOptions={screenOptionsStyle}
  >
    <Stack.Screen name="FirstWalkthrough" component={FirstWalkthrough} />
    <Stack.Screen name="SecondWalkthrough" component={SecondWalkthrough} />
  </Stack.Navigator>
);
