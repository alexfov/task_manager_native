import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./personalActions";
import { getData, sortData } from "./personalFunctions";
import FlatListItem from "../../components/FlatlistItem";

function Personal(props) {
    const personal = useSelector((state) => state.personal);
    const dispatch = useDispatch();
    useEffect(() => {
        getData()
            .then((data) => sortData(data))
            .then((data) => dispatch(init(data)));
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <FlatListItem
                name={item.last + " " + item.first}
                group={
                    personal[index]?.group !== personal[index - 1]?.group &&
                    item.group
                }
                iconName={
                    item.isGeodesist ? "account-hard-hat" : "baby-face-outline"
                }
                adress={item.adress}
                onPress={() => console.log(item.id)}
            />
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                data={personal}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    );
}

export default Personal;

const styles = StyleSheet.create({});
