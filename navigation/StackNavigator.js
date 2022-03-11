import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawernavigation from "./DrawerNavigator";
import Add from "../Screens/Addtodo";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Drawernavigation}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Drawer" component={Drawernavigation} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
}
