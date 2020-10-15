import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, Dimensions, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bindCar, deleteCar, init } from "./carsActions";
import { getData, sortData } from "./carsFunctions";
import FlatListItem from "../../components/FlatlistItem";
import { FlatList } from "react-native-gesture-handler";
import { Transition, Transitioning } from "react-native-reanimated";
import { ownership } from "../../Database/cars";
import { alertAsync } from "../../commonFunctions/alertAsync";
import AsyncStorage from "@react-native-community/async-storage";

const transition = (
    <Transition.Together>
        <Transition.Out
            type="slide-left"
            durationMs={500}
            interpolation="easeOut"
        />
        <Transition.Change durationMs={300} />
    </Transition.Together>
);

function Cars({ navigation }) {
    const ref = React.useRef();
    const cars = useSelector((state) =>
        state.cars.filter((car) => car.belongs == null)
    );
    const allCars = useSelector((state) => state.cars);
    const objId = useSelector((state) => state.tasks.activeObject);
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
            .then((data) => sortData(data))
            .then((data) => dispatch(init(data)));
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("cars", JSON.stringify(allCars));
    }, [allCars.length]);

    const onCarLongPress = async (id) => {
        const confirmation = await alertAsync("Удалить машину?");
        if (!confirmation) return;
        dispatch(deleteCar(id));
        ref.current?.animateNextTransition();
    };

    const onCarPress = (id, objId) => {
        dispatch(bindCar({ id, objId }));
        ref.current?.animateNextTransition();
    };

    const renderItem = ({ item, index }) => {
        return (
            <FlatListItem
                name={item.name}
                group={
                    cars[index]?.owner !== cars[index - 1]?.owner
                        ? ownership[item.owner][0]
                        : ""
                }
                iconName="car"
                adress={ownership[item.owner]}
                onPress={() => onCarPress(item.id, objId)}
                onLongPress={() => onCarLongPress(item.id)}
            />
        );
    };

    return (
        <SafeAreaView>
            <Transitioning.View ref={ref} transition={transition}>
                <FlatList
                    data={cars}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                />
            </Transitioning.View>
        </SafeAreaView>
    );
}

export default Cars;

const styles = StyleSheet.create({});
