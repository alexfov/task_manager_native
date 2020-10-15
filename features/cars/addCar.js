import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { alertAsync } from "../../commonFunctions/alertAsync";
import { ownership } from "../../Database/cars";
import { addCar } from "./carsActions";

function AddCar({ navigation }) {
    const maxCarIndex = useSelector(
        (state) => state.cars.reduce((a, b) => (a.id > b.id ? a : b)).id
    );
    const cars = useSelector((state) => state.cars);
    const [name, setName] = useState("");
    const [owner, setOwner] = useState(0);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const errorMessage = "Эй, это надо заполнить!";

    const dispatch = useDispatch();

    useEffect(() => {
        if (name.length === 0) setIsBtnDisabled(true);
        else setIsBtnDisabled(false);
    }, [name]);

    useEffect(() => {
        AsyncStorage.setItem("cars", JSON.stringify(cars));
    }, [cars.length]);

    const onSubmit = async () => {
        if (name.length === 0) return;
        const confirmation = await alertAsync("Добавить машину?");
        if (!confirmation) return;
        const id = maxCarIndex + 1;
        const newCar = { id, name, owner };
        dispatch(addCar(newCar));
        navigation.navigate("cars");
    };

    return (
        <ScrollView style={styles.container}>
            <Input
                placeholder="Ларгус"
                label="Название машины"
                onChangeText={(val) => setName(val)}
                defaultValue={name}
                errorMessage={name.length === 0 ? errorMessage : ""}
            />
            <View>
                <Text style={styles.radioLabel}>Группа:</Text>
                <CheckBox
                    title={ownership[0]}
                    checked={owner === 0}
                    onPress={() => setOwner(0)}
                    checkedIcon={<Icon name="radiobox-marked" size={30} />}
                    uncheckedIcon={<Icon name="radiobox-blank" size={30} />}
                    textStyle={{ fontSize: 16 }}
                    containerStyle={{ margin: 0 }}
                />
                <CheckBox
                    title={ownership[1]}
                    checked={owner === 1}
                    onPress={() => setOwner(1)}
                    checkedIcon={<Icon name="radiobox-marked" size={30} />}
                    uncheckedIcon={<Icon name="radiobox-blank" size={30} />}
                    textStyle={{ fontSize: 16 }}
                    containerStyle={{ marginTop: -2 }}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="ДОБАВИТЬ"
                        onPress={onSubmit}
                        disabled={isBtnDisabled}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default AddCar;

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    buttonContainer: {
        width: 200,
        alignSelf: "center",
        marginTop: 20,
    },
    radioLabel: {
        fontSize: 16,
        color: "#86939e",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        marginLeft: 10,
    },
});
