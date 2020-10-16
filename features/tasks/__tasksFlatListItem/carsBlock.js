import React from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { useDispatch } from "react-redux";
import { ref } from "..";
import Touchable from "../../../components/Touchable";
import constants from "../../../constants";
import { unbindCar } from "../../cars/carsActions";

function CarsBlock({ personal, cars }) {
    const dispatch = useDispatch();
    return (
        <View style={styles.carsBlock}>
            {cars.map((car, i) => (
                <Touchable
                    key={car.id}
                    onLongPress={() => {
                        dispatch(unbindCar(car.id));
                        let a = personal.length + cars.length > 1;
                        if (a) ref.current?.animateNextTransition();
                        Vibration.vibrate(constants.vibrationDuration);
                    }}
                    delayLongPress={constants.vibrationDelay}
                >
                    <View style={styles.carText}>
                        <Text style={{ fontStyle: "italic" }}>
                            / {car.name} {i === cars.length - 1 && " /"}
                        </Text>
                    </View>
                </Touchable>
            ))}
        </View>
    );
}

export default CarsBlock;

const styles = StyleSheet.create({
    carText: {
        paddingVertical: 10,
        paddingHorizontal: 2.5,
    },
    carsBlock: {
        flexDirection: "row",
    },
});
