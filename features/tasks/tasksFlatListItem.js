import React from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Touchable from "../../components/Touchable";
import styles from "../../components/FlatlistItem/style";
import { unbindEmployee } from "../personal/personalActions";
import { useDispatch } from "react-redux";
import { unbindCar } from "../cars/carsAtions";
import constants from "../../constants";

const getIcon = (iconName) => {
    const iconSize = 28;
    const iconColor = "#fff";
    return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

function TasksFlatListItem({ name, group, iconName, onPress, cars, personal }) {
    const dispatch = useDispatch();
    return (
        <Touchable onPress={onPress}>
            <View style={styles.item}>
                <View style={styles.group}>
                    <Text style={styles.groupText}>{group}</Text>
                </View>
                <View>
                    <View style={styles.avatar}>{getIcon(iconName)}</View>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={stylesAdditional.carsBlock}>
                            {cars.map((car) => (
                                <Touchable
                                    key={car.id}
                                    onLongPress={() => {
                                        dispatch(unbindCar(car.id));
                                        Vibration.vibrate(
                                            constants.vibrationDuration
                                        );
                                    }}
                                    delayLongPress={constants.vibrationDelay}
                                >
                                    <View style={stylesAdditional.carText}>
                                        <Text>/ {car.name} </Text>
                                    </View>
                                </Touchable>
                            ))}
                        </View>
                        <View style={{ flex: 1 }}>
                            {personal.map((employee, ind) => (
                                <Touchable
                                    key={employee.id}
                                    onLongPress={() => {
                                        Vibration.vibrate(
                                            constants.vibrationDuration
                                        );
                                        dispatch(unbindEmployee(employee.id));
                                    }}
                                    delayLongPress={constants.vibrationDelay}
                                >
                                    <View style={stylesAdditional.personalText}>
                                        <Text>
                                            {ind + 1}. {employee.name}
                                        </Text>
                                    </View>
                                </Touchable>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </Touchable>
    );
}

export default TasksFlatListItem;

const stylesAdditional = StyleSheet.create({
    carsBlock: {
        flexDirection: "row",
    },
    carText: {
        paddingVertical: 10,
        paddingHorizontal: 2.5,
    },
    personalText: {
        paddingVertical: 5,
    },
});
