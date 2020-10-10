import React from "react";
import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native";

const isAndroid = Platform.OS === "android";

function Touchable(props) {
    return (
        <>
            {isAndroid ? (
                <TouchableNativeFeedback {...props} />
            ) : (
                <TouchableOpacity {...props} />
            )}
        </>
    );
}

export default Touchable;
