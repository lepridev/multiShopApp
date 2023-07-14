import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BusinessScreen from "./businessScreens/BusinessScreen";
import TopTabsGroup from "./TopTapsGroup";

// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Profile" component={TopTabsGroup} />
      <Drawer.Screen name="Payments" component={BusinessScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerGroup;
