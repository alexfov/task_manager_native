import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { groups } from "../../Database/personal";
import Touchable from "../Touchable";
import styles from "./style";
import constants from "../../constants";

const getIcon = (iconName) => {
    const iconSize = 28;
    const iconColor = "#fff";
    return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

function FlatListItem({
    name,
    group,
    iconName,
    adress,
    onPress,
    onLongPress,
    belongs,
}) {
    return (
        <Touchable
            onPress={onPress}
            onLongPress={onLongPress}
            delayLongPress={constants.vibrationDelay}
        >
            <View style={styles.item}>
                <View style={styles.group}>
                    <Text style={styles.groupText}>{group}</Text>
                </View>
                <View>
                    <View style={styles.avatar}>{getIcon(iconName)}</View>
                </View>
                <View style={[styles.textContainer, {}]}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.adress}>{adress}</Text>
                    </View>
                    {/* <View style={{ flex: 1 }}>
                        <Text style={styles.adress}>{belongs}</Text>
                    </View> */}
                </View>
            </View>
        </Touchable>
    );
}

export default FlatListItem;
