import React from "react";
import DashboardScreen from "src/screens/dasboard/dashboard.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const screenOptionsStyle = {
  headerShown: false,
  headerTintColor: "#ffffff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export const DashboardNavigation = () => (
  <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={screenOptionsStyle}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
  </Tab.Navigator>
);
