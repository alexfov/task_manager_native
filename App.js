import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarNavigation, { navigationRef } from "./Navigation/Tabs/Tabs";
import CarAddModal from "./features/cars/carAddModal";

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
                    cardStyle: { backgroundColor: "transparent" },
                    cardOverlayEnabled: true,
                    cardStyleInterpolator: ({ current: { progress } }) => ({
                        cardStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 0.5, 0.9, 1],
                                outputRange: [0, 0.25, 0.7, 1],
                            }),
                        },
                        overlayStyle: {
                            opacity: progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.7],
                                extrapolate: "clamp",
                            }),
                        },
                    }),
                }}
                mode="modal"
            >
                <Stack.Screen name="tabs" component={TabBarNavigation} />
                <Stack.Screen name="carAddModal" component={CarAddModal} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({});
