import React, { createRef, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import MainBtn from "./__mainBtn";
import SecondaryBtn from "./__secondaryBtn";

const transition = (
    <Transition.Together>
        <Transition.In type="fade" />
        <Transition.Out type="fade" />
        <Transition.Change durationMs={200} interpolation="easeInOut" />
    </Transition.Together>
);

function FAB(props) {
    const [size, setSize] = useState(50);
    const [itemSize, setItemSize] = useState(0);
    const ref = useRef();
    return (
        <Transitioning.View
            ref={ref}
            transition={transition}
            style={{
                borderColor: "green",
                borderWidth: 1,
                position: "absolute",
                bottom: 70,
                right: 30,
                height: 270,
                padding: 10,
                zIndex: 1000,
                flexDirection: "column-reverse",
            }}
        >
            <View
                style={{
                    width: 50,
                    height: size,
                    flexDirection: "column-reverse",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // overflow: "hidden",
                }}
            >
                <MainBtn
                    size={size}
                    setSize={setSize}
                    ref={ref}
                    itemSize={itemSize}
                    setItemSize={setItemSize}
                />
                <SecondaryBtn itemSize={itemSize} />
                <SecondaryBtn itemSize={itemSize} />
                <SecondaryBtn itemSize={itemSize} />
            </View>
        </Transitioning.View>
    );
}

export default FAB;

const styles = StyleSheet.create({
    item: {
        borderRadius: 25,
        backgroundColor: "red",
        elevation: 5,
    },
});
