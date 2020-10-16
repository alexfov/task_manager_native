import React from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { useDispatch } from "react-redux";
import { ref } from "..";
import Touchable from "../../../components/Touchable";
import constants from "../../../constants";
import { unbindEmployee } from "../../personal/personalActions";

function PersonalBlock({ personal, cars }) {
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            {personal.map((employee, ind) => (
                <Touchable
                    key={employee.id}
                    onLongPress={() => {
                        dispatch(unbindEmployee(employee.id));
                        let a = personal.length + cars.length > 1;
                        if (a) ref.current?.animateNextTransition();
                        Vibration.vibrate(constants.vibrationDuration);
                    }}
                    delayLongPress={constants.vibrationDelay}
                >
                    <View style={styles.personalText}>
                        <Text>
                            {ind + 1}. {employee.name}
                        </Text>
                    </View>
                </Touchable>
            ))}
        </View>
    );
}

export default PersonalBlock;

const styles = StyleSheet.create({
    personalText: {
        paddingVertical: 5,
    },
});
