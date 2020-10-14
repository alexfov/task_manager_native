import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { groups } from "../../Database/personal";

function AddCar(props) {
    const [last, setLast] = useState("");
    const [first, setFirst] = useState("");
    const [adress, setAdress] = useState("");
    const [isGeodesist, setIsGeodesist] = useState(true);
    const [group, setGroup] = useState(groups[0]);

    return (
        <View>
            <View>
                <Input
                    placeholder="Иванов"
                    label="Фамилия"
                    onChangeText={(val) => setLast(val)}
                    defaultValue={last}
                />
                <Input
                    placeholder="Александр"
                    label="Имя"
                    onChangeText={(val) => setLast(val)}
                    defaultValue={last}
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
                    uncheckedIcon={
                        <Icon name="checkbox-blank-outline" size={30} />
                    }
                    textStyle={{ fontSize: 16 }}
                />
                <View>
                    <CheckBox
                        title="Миша"
                        checked={group === groups[0]}
                        onPress={() => setGroup(groups[0])}
                        checkedIcon={<Icon name="radiobox-marked" size={30} />}
                        uncheckedIcon={<Icon name="radiobox-blank" size={30} />}
                        textStyle={{ fontSize: 16 }}
                        containerStyle={{ margin: 0 }}
                    />
                    <CheckBox
                        title="Коля"
                        checked={group === groups[1]}
                        onPress={() => setGroup(groups[1])}
                        checkedIcon={<Icon name="radiobox-marked" size={30} />}
                        uncheckedIcon={<Icon name="radiobox-blank" size={30} />}
                        textStyle={{ fontSize: 16 }}
                        containerStyle={{ margin: 0 }}
                    />
                </View>
            </View>
        </View>
    );
}

export default AddCar;

const styles = StyleSheet.create({});
