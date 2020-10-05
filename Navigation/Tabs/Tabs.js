import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cars from "../../components/Cars";
import Personal from "../../features/personal";
import WorkObjects from "../../components/WorkObjects";
import Tasks from "../../components/Tasks";
import styles from "./Styles";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "cars";

    switch (routeName) {
        case "cars":
            return "Транспорт";
        case "personal":
            return "Персонал";
        case "objects":
            return "Объекты";
        case "tasks":
            return "Задания";
    }
}

const Tab = createMaterialTopTabNavigator();

const activeTintColor = "#fff";
const inactiveTintColor = "rgba(255,255,255,0.5)";
const iconSize = 20;

const carsTabIcon = ({ focused, color }) => {
    return <Icon name="car" size={iconSize} color={color} />;
};
const objectsTabIcon = ({ focused, color }) => {
    return <Icon name="highway" size={iconSize} color={color} />;
};
const personalTabIcon = ({ focused, color }) => {
    return <Icon name="account-hard-hat" size={iconSize} color={color} />;
};
const tasksTabIcon = ({ focused, color }) => {
    return <Icon name="format-list-text" size={iconSize} color={color} />;
};

const TabBarNavigation = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    }, [navigation, route]);
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            tabBarOptions={{
                showIcon: true,
                pressColor: "rgba(255,255,255,0.1)",
                labelStyle: styles.labelStyle,
                activeTintColor: activeTintColor,
                inactiveTintColor: inactiveTintColor,
                tabStyle: styles.tabStyle,
                indicatorStyle: styles.indicatorStyle,
                style: styles.tabBar,
                iconStyle: styles.iconStyle,
            }}
        >
            <Tab.Screen
                name="cars"
                component={Cars}
                options={{
                    tabBarLabel: "Машины",
                    tabBarIcon: carsTabIcon,
                }}
            />
            <Tab.Screen
                name="personal"
                component={Personal}
                options={{
                    tabBarLabel: "Персонал",
                    tabBarIcon: personalTabIcon,
                }}
            />
            <Tab.Screen
                name="objects"
                component={WorkObjects}
                options={{
                    tabBarLabel: "Объекты",
                    tabBarIcon: objectsTabIcon,
                }}
            />
            <Tab.Screen
                name="tasks"
                component={Tasks}
                options={{
                    tabBarLabel: "Задания",
                    tabBarIcon: tasksTabIcon,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabBarNavigation;
