import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Touchable from "../../../components/Touchable";
import styles from "../../../components/FlatlistItem/style";
import { useDispatch, useSelector } from "react-redux";
import constants from "../../../constants";
import { setActiveObject } from "../tasksActions";
import PersonalBlock from "./personalBlock";
import CarsBlock from "./carsBlock";

const getIcon = (iconName) => {
    const iconSize = 28;
    const iconColor = "#fff";
    return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

const TasksFlatListItem = ({
    name,
    group,
    iconName,
    onPress,
    cars,
    personal,
    onLongPress,
    id,
}) => {
    const dispatch = useDispatch();
    const task = useSelector((state) => state.tasks.tasks[id]);
    return (
        <Touchable
            onPress={onPress}
            onLongPress={() => {
                onLongPress();
                dispatch(setActiveObject(id));
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
                        {task?.length > 0 && (
                            <View style={{ marginTop: 7 }}>
                                <Text style={{ fontStyle: "italic" }}>
                                    ( {task} )
                                </Text>
                            </View>
                        )}
                        <CarsBlock personal={personal} cars={cars} />
                        <PersonalBlock personal={personal} cars={cars} />
                    </View>
                </View>
            </View>
        </Touchable>
    );
};

export default TasksFlatListItem;
