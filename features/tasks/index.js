import React, { useEffect } from "react";
import { Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TasksFlatListItem from "./tasksFlatListItem";
import { Transitioning } from "react-native-reanimated";
import { transition } from "../../commonFunctions/transitions";
import {
    getTomorrowDate,
    getTomorrowWeekDay,
} from "../../commonFunctions/date";
import { setMessage } from "./tasksActions";

function Tasks({ navigation, route }) {
    const ref = React.useRef();
    const dispatch = useDispatch();
    const { cars, personal, objects } = useSelector((state) => state);
    const objectsMap = [];
    objects.forEach((x) => [
        objectsMap.push({
            name: x.name,
            cars: cars
                .filter((car) => car.belongs === x.id)
                .map((car) => {
                    return { name: car.name, id: car.id };
                }),
            personal: personal
                .filter((employee) => employee.belongs === x.id)
                .map((employee) => {
                    return { name: employee.last, id: employee.id };
                }),
        }),
    ]);

    const tomorrowDate = getTomorrowDate().toLocaleDateString();
    const tomorrowDay = getTomorrowWeekDay();

    let message = "";
    objectsMap
        .filter((obj) => obj.cars.length + obj.personal.length > 0)
        .forEach((obj) => {
            message += `*${obj.name}*\r\n`;
            message += `_${obj.cars.map((car) => car.name).join(" / ")}_\r\n`;
            message += obj.personal
                .map((employee, i) => `${i + 1}. ${employee.name}`)
                .join("\r\n");
            message += "\r\n\r\n";
        });
    message = `*${tomorrowDate} ${tomorrowDay}*\r\n` + message;
    message = message = message.trim();

    useEffect(() => {
        dispatch(setMessage(message));
    }, [message]);

    const renderItem = ({ item }) => {
        if (item.cars.length === 0 && item.personal.length === 0) return;
        return (
            <TasksFlatListItem
                name={item.name}
                iconName="map-marker"
                cars={item.cars}
                personal={item.personal}
                ref={ref}
            />
        );
    };

    return (
        <Transitioning.View
            ref={ref}
            transition={transition({
                inAnim: "slide-right",
                outAnim: "slide-right",
            })}
            style={styles.item}
        >
            <Text>Пока что не добавлено ни одного задания</Text>
            <Text>
                {tomorrowDate} {tomorrowDay}
            </Text>
            <FlatList
                data={objectsMap}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.name)}
            />
        </Transitioning.View>
    );
}

export default Tasks;
