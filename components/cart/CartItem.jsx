import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import styles from "./cartItem.styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { symbolName } from "typescript";

const deleteIcon = require("../../assets/images/delete.png");
const markReadIcon = require("../../assets/images/checked-removebg-preview.png");
const avatar = require("../../assets/images/avatar.jpg");

const rightSwipeActionsWidth = 80;
const CartItem = ({ text }) => {
  const [checked, setChecked] = React.useState(false);
  const swipeableRef = useRef(null);
  const translationX = new Animated.Value(0);

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-rightSwipeActionsWidth, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const opacity = dragX.interpolate({
      inputRange: [-rightSwipeActionsWidth, -rightSwipeActionsWidth / 2, 0],
      outputRange: [1, 0.5, 0],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={{
          width: rightSwipeActionsWidth,
          backgroundColor: "red", // Màu nền của "right action"
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Animated.View
          style={{
            transform: [{ scale }],
            opacity,
          }}>
          <Image source={deleteIcon} style={styles.icon} />
        </Animated.View>
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <Swipeable
        ref={swipeableRef}
        overshootRight={false}
        overshootLeft={false}
        renderRightActions={renderRightActions}
        containerStyle={{
          transform: [{ translateX: translationX }],
        }}>
        <View style={styles.swipaView}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#006FC8"
          />
          <LinearGradient
            colors={["blue", "red"]}
            style={styles.linearGradient}>
            <Image source={avatar} style={styles.image} />
          </LinearGradient>
          <View style={styles.productWrap}>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default CartItem;
