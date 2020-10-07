import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
// import {} from "react-native-gesture-handler";

function CarAddModal(props) {
    return (
        <View>
            <Text style={styles.text}>Название машины</Text>
            <TextInput
                style={styles.input}
                placeholder="asd"
                placeholderTextColor="#fff"
            />
        </View>
    );
}

export default CarAddModal;

const styles = StyleSheet.create({
    text: {
        color: "#fff",
    },
    input: {
        width: 200,
        height: 50,
        borderColor: "red",
        borderWidth: 1,
        color: "#fff",
    },
});
