import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarNavigation, { navigationRef } from "./Navigation/Tabs/Tabs";
import AddEmployee from "./features/personal/addEmployee";
import AddCar from "./features/cars/addCar";

const Stack = createStackNavigator();
function App(props) {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#212121",
                    },
                    headerTintColor: "#fff",
                }}
            >
                <Stack.Screen name="tabs" component={TabBarNavigation} />
                <Stack.Screen name="addEmployee" component={AddEmployee} />
                <Stack.Screen name="addCar" component={AddCar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({});
