import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button, CheckBox, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { alertAsync } from "../../commonFunctions/alertAsync";
import { directions } from "../../Database/objects";
import { addObject } from "./objectsActions";

function AddObject({ navigation }) {
  const maxCarIndex = useSelector(
    (state) => state.objects.reduce((a, b) => (a.id > b.id ? a : b)).id
  );
  const objects = useSelector((state) => state.objects);
  const [name, setName] = useState("");
  const [direction, setDirection] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const errorMessage = "Эй, это надо заполнить!";

  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length === 0) setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  }, [name]);

  useEffect(() => {
    AsyncStorage.setItem("objects", JSON.stringify(objects));
  }, [objects.length]);

  const onSubmit = async () => {
    if (name.length === 0) return;
    const confirmation = await alertAsync("Добавить объект?");
    if (!confirmation) return;
    const id = maxCarIndex + 1;
    const newObj = { id, name, direction };
    dispatch(addObject(newObj));
    navigation.navigate("objects");
  };

  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder="Название объекта"
        label="Витино"
        onChangeText={(val) => setName(val)}
        defaultValue={name}
        errorMessage={name.length === 0 ? errorMessage : ""}
      />
      <View>
        <Text style={styles.radioLabel}>Направление:</Text>
        {directions.map((item, i) => {
          return (
            <CheckBox
              key={item}
              title={item}
              checked={direction === i}
              onPress={() => setDirection(i)}
              checkedIcon={<Icon name="radiobox-marked" size={30} />}
              uncheckedIcon={<Icon name="radiobox-blank" size={30} />}
              textStyle={{ fontSize: 16 }}
              containerStyle={{ margin: 0, marginTop: -2 }}
            />
          );
        })}
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

export default AddObject;

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
    marginTop: 10,
  },
});
