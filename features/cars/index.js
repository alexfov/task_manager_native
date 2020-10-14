import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, Dimensions, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bindCar, init } from "./carsAtions";
import { getData, sortData } from "./carsFunctions";
import FlatListItem from "../../components/FlatlistItem";
import { FlatList } from "react-native-gesture-handler";
import { Transition, Transitioning } from "react-native-reanimated";

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
    const [left, setLeft] = useState(0);
    const cars = useSelector((state) =>
        state.cars.filter((car) => car.belongs == null)
    );
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
                onPress={() => {
                    dispatch(bindCar({ id: item.id, objId }));
                    ref.current.animateNextTransition();
                }}
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
