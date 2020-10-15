import React, { useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Vibration,
    TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Touchable from "../../components/Touchable";
import styles from "../../components/FlatlistItem/style";
import { unbindEmployee } from "../personal/personalActions";
import { useDispatch } from "react-redux";
import { unbindCar } from "../cars/carsActions";
import constants from "../../constants";

const getIcon = (iconName) => {
    const iconSize = 28;
    const iconColor = "#fff";
    return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

const TasksFlatListItem = React.forwardRef(
    (
        { name, group, iconName, onPress, cars, personal, onLongPress, id },
        ref
    ) => {
        const dispatch = useDispatch();
        return (
            <Touchable
                onPress={onPress}
                onLongPress={() => {
                    console.log(id);
                }}
                delayLongPress={constants.vibrationDelay}
            >
                <View style={styles.item}>
                    <View style={styles.group}>
                        <Text style={styles.groupText}>{group}</Text>
                    </View>
                    <View>
                        <View style={styles.avatar}>{getIcon(iconName)}</View>
                    </View>
                    <View style={styles.textContainer}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.name, { fontWeight: "bold" }]}>
                                {name}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={stylesAdditional.carsBlock}>
                                {cars.map((car) => (
                                    <Touchable
                                        key={car.id}
                                        onLongPress={() => {
                                            dispatch(unbindCar(car.id));
                                            let a =
                                                personal.length + cars.length >
                                                1;
                                            if (a)
                                                ref.current?.animateNextTransition();
                                            Vibration.vibrate(
                                                constants.vibrationDuration
                                            );
                                        }}
                                        delayLongPress={
                                            constants.vibrationDelay
                                        }
                                    >
                                        <View style={stylesAdditional.carText}>
                                            <Text
                                                style={{ fontStyle: "italic" }}
                                            >
                                                / {car.name}{" "}
                                            </Text>
                                        </View>
                                    </Touchable>
                                ))}
                            </View>
                            <View style={{ flex: 1 }}>
                                {personal.map((employee, ind) => (
                                    <Touchable
                                        key={employee.id}
                                        onLongPress={() => {
                                            dispatch(
                                                unbindEmployee(employee.id)
                                            );
                                            let a =
                                                personal.length + cars.length >
                                                1;
                                            if (a)
                                                ref.current?.animateNextTransition();
                                            Vibration.vibrate(
                                                constants.vibrationDuration
                                            );
                                        }}
                                        delayLongPress={
                                            constants.vibrationDelay
                                        }
                                    >
                                        <View
                                            style={
                                                stylesAdditional.personalText
                                            }
                                        >
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
);

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
