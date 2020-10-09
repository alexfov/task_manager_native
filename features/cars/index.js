import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    SafeAreaView,
    Dimensions,
} from "react-native";
// import ActionBtn from "../../components/ActionBtn";
import { useDispatch, useSelector } from "react-redux";
import { bindCar, init } from "./carsAtions";
import { getData, sortData } from "./carsFunctions";
import FlatListItem from "../../components/FlatlistItem";
import { FlatList } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

function Cars({ navigation }) {
    const cars = useSelector((state) => state.cars);
    const objId = useSelector((state) => state.tasks.activeObject);
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
            .then((data) => sortData(data))
            .then((data) => dispatch(init(data)));
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <FlatListItem
                name={item.name}
                group={
                    cars[index]?.owner !== cars[index - 1]?.owner &&
                    item.owner.slice(0, 1)
                }
                iconName="car"
                adress={item.owner}
                onPress={() => dispatch(bindCar({ id: item.id, objId }))}
            />
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                data={cars}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    );
}

export default Cars;

const styles = StyleSheet.create({});
