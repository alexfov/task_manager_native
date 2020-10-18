import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { init } from "../../features/tasks/tasksActions";
import { navigate } from "../../Navigation/Tabs/Tabs";

function ActionBtn(props) {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        width: 350,
        height: 400,
        position: "absolute",
        bottom: 50,
        right: 0,
        borderWidth: 1,
      }}
    >
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#52ce14"
          title="Новая машина"
          onPress={() => navigate("addCar")}
        >
          <Icon name="car" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Новый сотрудник"
          onPress={() => navigate("addEmployee")}
        >
          <Icon name="account-hard-hat" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Новый объект"
          onPress={() => navigate("addObject")}
        >
          <Icon name="highway" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Новое задание"
          onPress={() => {
            dispatch(init());
            navigate("objects");
          }}
        >
          <Icon name="format-list-text" style={styles.actionButtonIcon} />
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
