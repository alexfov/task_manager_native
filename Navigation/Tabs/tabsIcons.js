import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const iconSize = 20;

export const carsTabIcon = ({ focused, color }) => {
    return <Icon name="car" size={iconSize} color={color} />;
};
export const objectsTabIcon = ({ focused, color }) => {
    return <Icon name="highway" size={iconSize} color={color} />;
};
export const personalTabIcon = ({ focused, color }) => {
    return <Icon name="account-hard-hat" size={iconSize} color={color} />;
};
export const tasksTabIcon = ({ focused, color }) => {
    return <Icon name="format-list-text" size={iconSize} color={color} />;
};
