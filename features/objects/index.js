import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./objectsActions";
import { getData, sortData } from "./objectsFunctions";
import FlatListItem from "../../components/FlatlistItem";
import { setActiveObject } from "../tasks/tasksActions";

function Objects(props) {
    const objects = useSelector((state) => state.objects);
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
                    objects[index]?.direction !==
                        objects[index - 1]?.direction &&
                    item.direction.slice(0, 1)
                }
                iconName="highway"
                adress={item.direction}
                onPress={() => dispatch(setActiveObject(item.id))}
            />
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                data={objects}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    );
}

export default Objects;

const styles = StyleSheet.create({});
