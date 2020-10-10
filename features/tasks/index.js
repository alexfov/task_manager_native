import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Vibration } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./tasksActions";
import Touchable from "../../components/Touchable";
import { unbindEmployee } from "../personal/personalActions";
import { unbindCar } from "../cars/carsAtions";
import TasksFlatListItem from "./tasksFlatListItem";

function Tasks(props) {
    const { cars, personal, objects } = useSelector((state) => state);
    const [objectsToRender, setObjectsToRender] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const objectsMap = [];
        objects.forEach((x) => [
            objectsMap.push({
                name: x.name,
                cars: cars
                    .filter((car) => car.belongs === x.id)
                    .map((car) => {
                        return { name: car.name, id: car.id };
                    }),
                personal: personal
                    .filter((employee) => employee.belongs === x.id)
                    .map((employee) => {
                        return { name: employee.last, id: employee.id };
                    }),
            }),
        ]);
        setObjectsToRender(objectsMap);
    }, [cars, personal, objects]);

    const renderItem = ({ item }) => {
        if (item.cars.length === 0 && item.personal.length === 0) return;
        return (
            <TasksFlatListItem
                name={item.name}
                iconName="map-marker"
                cars={item.cars}
                personal={item.personal}
            />
        );
    };

    return (
        <View>
            <Button
                title="start task"
                onPress={() => {
                    dispatch(init());
                }}
            ></Button>
            <FlatList
                data={objectsToRender}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.name)}
            />
        </View>
    );
}

export default Tasks;
