import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ActionBtn(props) {
    return (
        // <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
                buttonColor="#9b59b6"
                title="New Task"
                onPress={() => console.log("notes tapped!")}
            >
                <Icon name="rocket" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#3498db"
                title="Notifications"
                onPress={() => {}}
            >
                <Icon name="car" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor="#1abc9c"
                title="All Tasks"
                onPress={() => {}}
            >
                <Icon name="car" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
        // </View>
    );
}

export default ActionBtn;

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: "white",
    },
});
