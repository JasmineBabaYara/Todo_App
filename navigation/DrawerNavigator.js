import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Homescreen";
import CustomDrawer from "../Components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={() => <CustomDrawer />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
