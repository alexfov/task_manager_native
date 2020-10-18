import React from "react";
import { Text, View, StyleSheet } from "react-native";

function SecondaryBtn({ itemSize }) {
    return (
        <View
            style={{
                flexDirection: "row",
            }}
        >
            <Text
                style={{
                    position: "absolute",
                    right: itemSize + 10,
                    height: itemSize,
                    top: 10,
                }}
            >
                Добавить Машину
            </Text>
            <View
                style={[styles.item, { height: itemSize, width: itemSize }]}
            />
        </View>
    );
}

export default SecondaryBtn;

const styles = StyleSheet.create({
    item: {
        borderRadius: 25,
        backgroundColor: "red",
        elevation: 5,
    },
});
