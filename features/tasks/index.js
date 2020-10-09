import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableNativeFeedback,
    Vibration,
} from "react-native";
import { BaseButton, FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import FlatListItem from "../../components/FlatlistItem";
import { init } from "./tasksActions";

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
            <FlatListItem
                name={item.name}
                iconName="map-marker"
                adress={
                    <View>
                        <View style={styles.carsBlock}>
                            {item.cars.map((car) => (
                                <BaseButton
                                    key={car.id}
                                    onPress={() => console.log(car.id)}
                                >
                                    <Text style={styles.carText}>
                                        / {car.name}{" "}
                                    </Text>
                                </BaseButton>
                            ))}
                        </View>
                        <View>
                            {item.personal.map((employee, ind) => (
                                <BaseButton
                                    key={employee.id}
                                    onPress={() => console.log(employee.id)}
                                    onLongPress={() => console.log(222)}
                                >
                                    <Text style={styles.carText}>
                                        {ind + 1}. {employee.name}
                                    </Text>
                                </BaseButton>
                            ))}
                        </View>
                    </View>
                }
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
            <TouchableNativeFeedback
                delayLongPress={100}
                onLongPress={() => {
                    console.log(222);
                    Vibration.vibrate(100);
                }}
            >
                <View>
                    <Text>{"ssssssssss"}</Text>
                </View>
            </TouchableNativeFeedback>
            <FlatList
                data={objectsToRender}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.name)}
            />
        </View>
    );
}

export default Tasks;

const styles = StyleSheet.create({
    carsBlock: {
        flexDirection: "row",
    },
    carText: {
        paddingVertical: 5,
        paddingHorizontal: 2.5,
    },
    personalText: {
        paddingVertical: 2.5,
    },
});
