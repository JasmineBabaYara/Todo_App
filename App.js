import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import DrawerNavigator from "./navigation/DrawerNavigator";
import  TodoContext  from "./Context/Context";

function App() {
  // context = global state
  const [arr, setArr] = useState([
    { todo: "Work on project" },
    { todo: "Go and visit babe " },
    { todo: "Check emails" },
    { todo: "Lunch with babe" },
    { todo: "Meditation" },
  ]);
  return (
    <TodoContext.Provider value={{ arr, setArr }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </TodoContext.Provider>
  );
}

export default App;

