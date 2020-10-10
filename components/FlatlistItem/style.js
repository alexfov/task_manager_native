import { StyleSheet } from "react-native";

const AVATAR_SIZE = 40;

export default styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 16,
    },
    avatar: {
        backgroundColor: "#707070",
        height: AVATAR_SIZE,
        width: AVATAR_SIZE,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: AVATAR_SIZE / 2,
    },
    group: {
        width: AVATAR_SIZE,
        justifyContent: "center",
    },
    groupText: {
        fontSize: 25,
    },
    textContainer: {
        paddingLeft: 16,
        flex: 1,
    },
    name: {
        fontSize: 16,
    },
    adress: { fontSize: 12 },
});
