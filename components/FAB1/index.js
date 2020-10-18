import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Touchable from "../Touchable";
import { navigate } from "../../Navigation/Tabs/Tabs";
import { useDispatch } from "react-redux";
import { init } from "../../features/tasks/tasksActions";

const mainBtnSize = 56;
const secondaryBtnSize = 48;
const margin = 16;

function FAB1(props) {
  const animation = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 6,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setOpen(!open);
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  const secondaryBtnStyle = (yOffset) => {
    return {
      transform: [
        { scale: animation },
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -yOffset],
          }),
        },
      ],
    };
  };

  const btnOffset = 70;
  const buttons = [
    {
      offset: btnOffset * 4,
      backgroundColor: "#52ce14",
      onPress: () => {
        navigate("addCar");
      },
      iconName: "car",
      text: "Добавить машину",
    },
    {
      offset: btnOffset * 3,
      backgroundColor: "#3498db",
      onPress: () => {
        navigate("addEmployee");
      },
      iconName: "account-hard-hat",
      text: "Добавить сотурдника",
    },
    {
      offset: btnOffset * 2,
      backgroundColor: "#9b59b6",
      onPress: () => {
        navigate("addObject");
      },
      iconName: "highway",
      text: "Добавить объект",
    },
    {
      offset: btnOffset,
      backgroundColor: "#1abc9c",
      onPress: () => {
        navigate("objects");
        dispatch(init());
      },
      iconName: "format-list-text",
      text: "Начать задание",
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => open && toggleMenu()}>
      <Animated.View
        style={[
          styles.container,
          props.style,
          open && {
            top: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
          },
        ]}
      >
        {buttons.map((button) => (
          <Touchable
            key={button.offset}
            onPress={() => {
              open && toggleMenu();
              button.onPress();
            }}
          >
            <Animated.View
              style={[
                styles.secondaryContainer,
                secondaryBtnStyle(button.offset),
                { backgroundColor: button.backgroundColor },
                open && {
                  marginBottom:
                    margin + (mainBtnSize - secondaryBtnSize) / 2 + 50,
                },
              ]}
            >
              <View style={styles.textContainer}>
                <Text style={styles.text}>{button.text}</Text>
              </View>
              <Icon
                name={button.iconName}
                style={{
                  color: "#fff",
                  fontSize: 24,
                }}
              />
            </Animated.View>
          </Touchable>
        ))}

        <View
          style={[
            styles.mainButtonContainer,
            open && { marginBottom: margin + 50 },
          ]}
        >
          <Touchable onPress={toggleMenu} borderless>
            <Animated.View style={[styles.mainButton, rotation]}>
              <Text style={{ fontSize: 24, color: "#fff" }}>+</Text>
            </Animated.View>
          </Touchable>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default FAB1;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    bottom: 50,
    right: 0,
  },
  mainButton: {
    width: mainBtnSize,
    height: mainBtnSize,
    borderRadius: mainBtnSize / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f82a48",
  },
  mainButtonContainer: {
    borderRadius: mainBtnSize / 2,
    elevation: 5,
    marginBottom: margin,
    marginRight: margin,
  },
  secondaryContainer: {
    width: secondaryBtnSize,
    height: secondaryBtnSize,
    borderRadius: secondaryBtnSize / 2,
    position: "absolute",
    bottom: margin + (mainBtnSize - secondaryBtnSize) / 2,
    right: margin + (mainBtnSize - secondaryBtnSize) / 2,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    paddingLeft: 10,
    borderRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
    fontSize: 13,
    alignSelf: "flex-end",
  },
  textContainer: {
    position: "absolute",
    right: mainBtnSize + 10,
    width: 300,
  },
});
