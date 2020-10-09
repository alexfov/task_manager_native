import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./style";

const getIcon = (iconName) => {
    const iconSize = 28;
    const iconColor = "#fff";
    return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

function FlatListItem({ name, group, iconName, adress, onPress }) {
    return (
        <BaseButton onPress={onPress}>
            <View style={styles.item}>
                <View style={styles.group}>
                    <Text style={styles.groupText}>{group}</Text>
                </View>
                <View>
                    <View style={styles.avatar}>{getIcon(iconName)}</View>
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View>
                        <Text style={styles.adress}>{adress}</Text>
                    </View>
                </View>
            </View>
        </BaseButton>
    );
}

export default FlatListItem;
