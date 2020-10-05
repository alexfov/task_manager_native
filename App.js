import React from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarNavigation from "./Navigation/Tabs/Tabs";

const Stack = createStackNavigator();

function App(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#212121",
                    },
                    headerTintColor: "#fff",
                }}
            >
                <Stack.Screen name="tabs" component={TabBarNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({});
