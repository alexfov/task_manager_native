import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarNavigation, { navigationRef } from "./Navigation/Tabs/Tabs";
import AddEmployee from "./features/personal/addEmployee";
import AddCar from "./features/cars/addCar";
import AddObject from "./features/objects/addObject";
import { enableScreens } from "react-native-screens";
import AsyncStorage from "@react-native-community/async-storage";
import RNBootSplash from "react-native-bootsplash";
RNBootSplash.show();
enableScreens();
// AsyncStorage.removeItem("personal");
// AsyncStorage.removeItem("cars");

const Stack = createStackNavigator();
function App(props) {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ duration: 250 });
      StatusBar.setBackgroundColor("#1e1e1e");
    }, 1000);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#212121",
          },
          headerTintColor: "#fff",
          safeAreaInsets: { top: 0 },
        }}
      >
        <Stack.Screen name="tabs" component={TabBarNavigation} />
        <Stack.Screen
          name="addEmployee"
          component={AddEmployee}
          options={{ title: "Добавить сотрудника" }}
        />
        <Stack.Screen
          name="addCar"
          component={AddCar}
          options={{ title: "Добавить машину" }}
        />
        <Stack.Screen
          name="addObject"
          component={AddObject}
          options={{ title: "Добавить объект" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
