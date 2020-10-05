import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ActionBtn from "../ActionBtn";
import AsyncStorage from "@react-native-community/async-storage";
import { cars as carsDb } from "../../Database/cars";
import { useDispatch, useSelector } from "react-redux";

function Cars(props) {
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        const gerCarsFromStorage = async () => {
            const carsStorage = await AsyncStorage.getItem("cars");
            const cars = carsStorage ?? carsDb;
            dispatch();
        };
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
            {/* <ActionBtn /> */}
            <Text>cars</Text>
        </View>
    );
}

export default Cars;

const styles = StyleSheet.create({});
