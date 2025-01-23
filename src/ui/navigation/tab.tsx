import React from "react";
import { Page, TabParams } from "./types";
import HomePage from "../pages/home/home.page";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SavedPage from "../pages/saved/saved.page";

const Tab = createBottomTabNavigator<TabParams>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#b05d2e', // Colore di sfondo dell'header
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === Page.Home) {
            iconName = focused ? "home" : "home-outline";
          } else {
            iconName = focused ? "star" : "star-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#deff05",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#545453", 
          borderTopWidth: 1,
          height: 60, 
          paddingTop: 5, 
        },
        tabBarLabelStyle: {
          fontSize: 12, // Dimensione del testo
          fontWeight: "bold", // Grassetto per il testo
        },
      })}
  
    >
      <Tab.Screen name={Page.Home} component={HomePage} />
      <Tab.Screen
        name={Page.Saved}
        component={SavedPage}
        initialParams={{ item: "" }}
      />
    </Tab.Navigator>
  );
}
