import React, { useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { deleteObject, init } from "./objectsActions";
import { getData, sortData } from "./objectsFunctions";
import FlatListItem from "../../components/FlatlistItem";
import { setActiveObject } from "../tasks/tasksActions";
import { directions } from "../../Database/objects";
import { alertAsync } from "../../commonFunctions/alertAsync";
import AsyncStorage from "@react-native-community/async-storage";
import { Transitioning } from "react-native-reanimated";
import { transition } from "../../commonFunctions/transitions";

function Objects(props) {
    const objects = useSelector((state) => state.objects);
    const ref = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        getData()
            .then((data) => sortData(data))
            .then((data) => dispatch(init(data)));
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("objects", JSON.stringify(objects));
    }, [objects.length]);

    const onObjectLongPress = async (id) => {
        const confirmation = await alertAsync("Удалить объект?");
        if (!confirmation) return;
        dispatch(deleteObject(id));
        ref.current?.animateNextTransition();
    };

    const renderItem = ({ item, index }) => {
        return (
            <FlatListItem
                name={item.name}
                group={
                    objects[index]?.direction !== objects[index - 1]?.direction
                        ? directions[item.direction][0]
                        : ""
                }
                iconName="highway"
                adress={directions[item.direction]}
                onPress={() => dispatch(setActiveObject(item.id))}
                onLongPress={() => onObjectLongPress(item.id)}
            />
        );
    };

    return (
        <SafeAreaView>
            <Transitioning.View
                ref={ref}
                transition={transition({
                    inAnim: "slide-left",
                    outAnim: "slide-left",
                })}
            >
                <FlatList
                    data={objects}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                />
            </Transitioning.View>
        </SafeAreaView>
    );
}

export default Objects;

const styles = StyleSheet.create({});
