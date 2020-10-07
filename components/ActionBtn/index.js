import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { navigate } from "../../Navigation/Tabs/Tabs";

function ActionBtn(props) {
    return (
        <View
            style={{
                flex: 1,
                width: 350,
                height: 400,
                position: "absolute",
                bottom: 50,
                right: 0,
            }}
        >
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item
                    buttonColor="#52ce14"
                    title="Новая машина"
                    onPress={() => {}}
                >
                    <Icon name="car" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#3498db"
                    title="Новый сотрудник"
                    onPress={() => {}}
                >
                    <Icon
                        name="account-hard-hat"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#9b59b6"
                    title="Новый объект"
                    onPress={() => navigate("cars")}
                >
                    <Icon name="highway" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1abc9c"
                    title="Новое задание"
                    onPress={() => {}}
                >
                    <Icon
                        name="format-list-text"
                        style={styles.actionButtonIcon}
                    />
                </ActionButton.Item>
            </ActionButton>
        </View>
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
