import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function HeaderRight(props) {
    const currentObjectId = useSelector((state) => state.tasks.activeObject);
    const curCars = useSelector((state) =>
        state.cars
            .filter((car) => currentObjectId && car.belongs === currentObjectId)
            .map((car) => {
                return (
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 11,
                            fontStyle: "italic",
                        }}
                        key={car.id}
                    >
                        {car.name}{" "}
                    </Text>
                );
            })
    );

    const curPersonal = useSelector((state) =>
        state.personal
            .filter(
                (person) =>
                    currentObjectId && person.belongs === currentObjectId
            )
            .filter((person, i) => i < 4)
            .map((person) => {
                return (
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 11,
                            fontStyle: "italic",
                        }}
                        key={person.id}
                    >
                        {person.last}{" "}
                    </Text>
                );
            })
    );

    return (
        <View style={{ maxWidth: 200 }}>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                {curCars}
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                {curPersonal}
            </View>
        </View>
    );
}

export default HeaderRight;

const styles = StyleSheet.create({});
