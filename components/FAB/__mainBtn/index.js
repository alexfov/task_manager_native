import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Touchable from "../../Touchable";

const MainBtn = React.forwardRef(
    ({ size, itemSize, setItemSize, setSize }, ref) => {
        return (
            <Touchable
                onPress={() => {
                    size > 50 ? setSize(50) : setSize(250);
                    itemSize < 50 ? setItemSize(50) : setItemSize(0);
                    ref.current?.animateNextTransition();
                }}
            >
                <View
                    style={[
                        // styles.item,
                        {
                            backgroundColor: "green",
                            zIndex: 100,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            elevation: 5,
                        },
                    ]}
                />
            </Touchable>
        );
    }
);

export default MainBtn;

const styles = StyleSheet.create({});
