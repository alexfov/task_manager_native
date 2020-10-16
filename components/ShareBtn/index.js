import React from "react";
import { Share, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import Touchable from "../Touchable";

const whatsAppIcon = <Icon name="whatsapp" size={30} color="#fff" />;

function ShareBtn(props) {
    const message = useSelector((state) => state.tasks.message);
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: message,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View
            style={{
                borderRadius: 100,
                overflow: "hidden",
                marginRight: 9,
            }}
        >
            <Touchable onPress={onShare} background="rgba(255,255,255,0.1)">
                <View
                    style={{
                        alignSelf: "flex-start",
                        padding: 7,
                    }}
                >
                    {whatsAppIcon}
                </View>
            </Touchable>
        </View>
    );
}

export default ShareBtn;
