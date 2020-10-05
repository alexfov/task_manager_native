import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

// function Tasks(props) {
//     return (
//         <View>
//             <Text>Tasks</Text>
//         </View>
//     );
// }

// export default Tasks;

const styles = StyleSheet.create({});

const FadeInView = (props) => {
    const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <FadeInView
                style={{
                    width: 250,
                    height: 50,
                    backgroundColor: "powderblue",
                }}
            >
                <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
                    Fading in
                </Text>
            </FadeInView>
        </View>
    );
};
