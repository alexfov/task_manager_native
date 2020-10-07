import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const getIcon = (iconName) => {
    const iconSize = 28;
    const iconColor = "#fff";
    return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

function PersonalItem({ item, index, data }) {
    return (
        <View style={styles.item}>
            <View style={styles.group}>
                <Text style={styles.groupText}>
                    {data[index]?.group !== data[index - 1]?.group
                        ? item.group
                        : ""}
                </Text>
            </View>
            <View>
                <View style={styles.avatar}>
                    {item.isGeodesist
                        ? getIcon("account-hard-hat")
                        : getIcon("baby-face-outline")}
                </View>
            </View>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.name}>
                        {item.last} {item.first}
                    </Text>
                </View>
                <View>
                    <Text style={styles.adress}>{item.adress}</Text>
                </View>
            </View>
        </View>
    );
}

export default PersonalItem;
