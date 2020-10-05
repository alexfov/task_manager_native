import AsyncStorage from "@react-native-community/async-storage";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { personal as personalDb } from "../../Database/personal";
import { init } from "./personalActions";

function Personal(props) {
    const personal = useSelector((state) => state.personal);
    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            const dataStorage = await AsyncStorage.getItem("personal");
            const data = dataStorage ?? personalDb;
            dispatch(init(data));
        })();
    }, []);

    return (
        <View>
            {personal.map((employee) => (
                <Text>
                    {employee.last} {employee.first}
                </Text>
            ))}
        </View>
    );
}

export default Personal;

const styles = StyleSheet.create({});
