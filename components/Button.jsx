import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../contants";
import { ActivityIndicator } from "react-native";

const Button = ({ title, onPress, isValid, loader }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(isValid === false ? COLORS.gray : COLORS.green)}>
      {loader === false ? (
        <Text style={styles.btnText}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 18,
  },
  btnStyle: (backgroundColor) => ({
    height: 50,
    marginVertical: 18,
    marginHorizontal: 10,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});
