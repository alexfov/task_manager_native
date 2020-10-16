import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./tasksActions";

function AddTask({ task, setTask, isVisible, setIsVisible }) {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.tasks.activeObject);
    return (
        <Modal visible={isVisible} animationType="fade" transparent>
            <View style={styles.container}>
                <View style={styles.block}>
                    <Input
                        placeholder="Съемка ВСП к 7.00"
                        label="Задание"
                        defaultValue={task}
                        onChangeText={(val) => setTask(val)}
                        value={task}
                    />
                    <View style={styles.btnContainer}>
                        <Button
                            onPress={() => {
                                dispatch(addTask({ task, id }));
                                setIsVisible(false);
                                setTask("");
                            }}
                            title="Добавить"
                            buttonStyle={styles.btn}
                        />
                        <Button
                            onPress={() => setIsVisible(false)}
                            title="Отмена"
                            buttonStyle={styles.btn}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default AddTask;

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    btn: {
        flexGrow: 1,
        marginHorizontal: 20,
    },
    container: {
        flexDirection: "column-reverse",
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    block: {
        paddingHorizontal: 16,
        paddingBottom: 20,
        backgroundColor: "#fff",
    },
});
