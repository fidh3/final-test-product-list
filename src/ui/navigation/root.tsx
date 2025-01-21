import React from "react";
import { MainParamList, Page } from "./types";
import DetailsPage from "../pages/details/details.page";
import HomePage from "../pages/home/home.page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tab";
import SavedPage from "../pages/saved/saved.page";


const Stack = createNativeStackNavigator<MainParamList>();
const Root = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Page.TabNavigator} component={TabNavigator} />
      <Stack.Screen name={Page.Home} component={HomePage} />
      <Stack.Screen name={Page.Saved} component={SavedPage} />
      <Stack.Screen name={Page.Details} component={DetailsPage} />
    </Stack.Navigator>
  );
};
export default Root;
