import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { bindEmployee, init } from "./personalActions";
import { getData, sortData } from "./personalFunctions";
import FlatListItem from "../../components/FlatlistItem";
import { Transitioning } from "react-native-reanimated";
import { transition } from "../../commonFunctions/transitions";
import AsyncStorage from "@react-native-community/async-storage";
import { groups } from "../../Database/personal";

function Personal(props) {
    // AsyncStorage.removeItem("personal");
    const ref = useRef();
    const personal = useSelector((state) =>
        state.personal.filter((employee) => employee.belongs == null)
    );
    const objId = useSelector((state) => state.tasks.activeObject);
    const dispatch = useDispatch();
    useEffect(() => {
        getData()
            .then((data) => sortData(data))
            .then((data) => dispatch(init(data)));
    }, []);

    const renderItem = ({ item, index }) => {
        console.log(groups);
        return (
            <FlatListItem
                name={item.last + " " + item.first}
                group={
                    personal[index]?.group !== personal[index - 1]?.group
                        ? groups[item.group][0].toUpperCase()
                        : ""
                }
                iconName={
                    item.isGeodesist ? "account-hard-hat" : "baby-face-outline"
                }
                adress={item.adress}
                onPress={() => {
                    dispatch(bindEmployee({ id: item.id, objId }));
                    ref.current?.animateNextTransition();
                }}
            />
        );
    };

    return (
        <Transitioning.View
            transition={transition({
                inAnim: "slide-left",
                outAnim: "slide-left",
            })}
            ref={ref}
        >
            <FlatList
                data={personal}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </Transitioning.View>
    );
}

export default Personal;

const styles = StyleSheet.create({});
