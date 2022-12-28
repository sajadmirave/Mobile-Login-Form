import { View, Text } from "react-native";
import React from "react";

// import navigation library
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import screens
import Feed from "./components/Feed";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

//call stack navigator function
const Stack = createStackNavigator();

// create stack navigator
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* iniliazing all pages */}
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
