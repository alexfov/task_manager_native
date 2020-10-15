import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { alertAsync } from "../../commonFunctions/alertAsync";
import { groups } from "../../Database/personal";
import { addEmployee } from "./personalActions";

function AddEmployee({ navigation }) {
    const maxEmployeeIndex = useSelector(
        (state) => state.personal.reduce((a, b) => (a.id > b.id ? a : b)).id
    );
    const personal = useSelector((state) => state.personal);
    const [last, setLast] = useState("");
    const [first, setFirst] = useState("");
    const [adress, setAdress] = useState("");
    const [isGeodesist, setIsGeodesist] = useState(true);
    const [group, setGroup] = useState(0);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const errorMessage = "Эй, это надо заполнить!";

    const dispatch = useDispatch();

    useEffect(() => {
        if (last.length === 0 || first.length === 0) setIsBtnDisabled(true);
        else setIsBtnDisabled(false);
    }, [last, first]);

    useEffect(() => {
        AsyncStorage.setItem("personal", JSON.stringify(personal));
    }, [personal.length]);

    const onSubmit = async () => {
        if (last.length === 0 || first.length === 0) return;
        const confirmation = await alertAsync("Добавить сотрудника?");
        if (!confirmation) return;
        const id = maxEmployeeIndex + 1;
        const newEmployee = { id, first, last, isGeodesist, adress, group };
        dispatch(addEmployee(newEmployee));
        navigation.navigate("personal");
    };

    return (
        <ScrollView style={styles.container}>
            <Input
                placeholder="Иванов"
                label="Фамилия"
                onChangeText={(val) => setLast(val)}
                defaultValue={last}
                errorMessage={last.length === 0 ? errorMessage : ""}
            />
            <Input
                placeholder="Александр"
                label="Имя"
                onChangeText={(val) => setFirst(val)}
                defaultValue={first}
                errorMessage={first.length === 0 ? errorMessage : ""}
            />
            <Input
                placeholder="Академическая"
                label="Адрес"
                onChangeText={(val) => setAdress(val)}
                defaultValue={adress}
            />
            <CheckBox
                title="Геодезист"
                checked={isGeodesist}
                onPress={() => setIsGeodesist(!isGeodesist)}
                checkedIcon={<Icon name="check-box-outline" size={30} />}
                uncheckedIcon={<Icon name="checkbox-blank-outline" size={30} />}
                textStyle={{ fontSize: 16 }}
            />
            <View>
                <Text style={styles.radioLabel}>Группа:</Text>
                <CheckBox
                    title={groups[0]}
                    checked={group === 0}
                    onPress={() => setGroup(0)}
                    checkedIcon={<Icon name="radiobox-marked" size={30} />}
                    uncheckedIcon={<Icon name="radiobox-blank" size={30} />}
                    textStyle={{ fontSize: 16 }}
                    containerStyle={{ margin: 0 }}
                />
                <CheckBox
                    title={groups[1]}
                    checked={group === 1}
                    onPress={() => setGroup(1)}
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

export default AddEmployee;

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
