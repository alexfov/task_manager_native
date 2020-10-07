import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./tasksActions";

function Tasks(props) {
    const state = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    return (
        <View>
            <Button
                title="start task"
                onPress={() => dispatch(init())}
            ></Button>
        </View>
    );
}

export default Tasks;

const styles = StyleSheet.create({});
