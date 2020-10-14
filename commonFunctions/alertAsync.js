import { Alert } from "react-native";

/**
 * Popup alert to confirm user actions.
 * Using promise to pause a script until a confirmation is done
 * @param {string} body
 * @returns {promise} resolves as boolean
 */
export const alertAsync = async (body) =>
    new Promise((resolve) => {
        Alert.alert(
            "Подтвердите действие",
            body,
            [
                { text: "Да", onPress: () => resolve(true) },
                {
                    text: "Отмена",
                    onPress: () => resolve(false),
                    style: "cancel",
                },
            ],
            { cancelable: false }
        );
    });
