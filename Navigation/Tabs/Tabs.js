import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Cars from "../../features/cars";
import Personal from "../../features/personal";
import Objects from "../../features/objects";
import Tasks from "../../features/tasks";
import styles from "./Styles";
import { useSelector } from "react-redux";
import HeaderRight from "./headerRight";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ShareBtn from "../../components/ShareBtn";
import {
    tasksTabIcon,
    carsTabIcon,
    objectsTabIcon,
    personalTabIcon,
} from "./tabsIcons";

export const navigationRef = React.createRef();
export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

const Tab = createMaterialTopTabNavigator();

const TabBarNavigation = ({ navigation, route }) => {
    const currentObjectId = useSelector((state) => state.tasks.activeObject);
    const currentObjectName = useSelector((state) => {
        const objItem = state.objects.filter(
            (x) => x.id === currentObjectId
        )[0];
        return objItem === undefined ? "Объект не выбран" : objItem.name;
    });
    const routeName = getFocusedRouteNameFromRoute(route);

    React.useEffect(() => {
        if (routeName === "tasks")
            navigation.setOptions({
                headerTitle: "Задание",
                headerRight: () => <ShareBtn />,
            });
        else
            navigation.setOptions({
                headerTitle: currentObjectName,
                headerRight: () => <HeaderRight />,
            });
    }, [currentObjectName, route]);

    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            tabBarOptions={{
                showIcon: true,
                pressColor: "rgba(255,255,255,0.1)",
                labelStyle: styles.labelStyle,
                activeTintColor: "#fff",
                inactiveTintColor: "rgba(255,255,255,0.5)",
                tabStyle: styles.tabStyle,
                indicatorStyle: styles.indicatorStyle,
                style: styles.tabBar,
                iconStyle: styles.iconStyle,
            }}
        >
            <Tab.Screen
                name="tasks"
                component={Tasks}
                options={{
                    tabBarLabel: "Задания",
                    tabBarIcon: tasksTabIcon,
                }}
                navigationParent={navigation}
            />
            <Tab.Screen
                name="objects"
                component={Objects}
                options={{
                    tabBarLabel: "Объекты",
                    tabBarIcon: objectsTabIcon,
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
                name="cars"
                component={Cars}
                options={{
                    tabBarLabel: "Машины",
                    tabBarIcon: carsTabIcon,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabBarNavigation;
