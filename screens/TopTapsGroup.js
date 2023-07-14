import { View, Text } from "react-native";
import React from "react";
import Feed from "./toptapp/Feed";
import BusinessScreen from "./businessScreens/BusinessScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileScreen from "./ProfileScreen";
import Business1 from "./businessScreens/Business1";
import Business2 from "./businessScreens/Business2";

// Top Tabs

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      <TopTabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Business",
        }}
      />
      <TopTabs.Screen name="Services" component={Business1} />
      <TopTabs.Screen name="Deals" component={Business2} />
    </TopTabs.Navigator>
  );
}

export default TopTabsGroup;
