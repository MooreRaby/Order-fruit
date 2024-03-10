import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../contants/theme";

const BlackBtn = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons
                name="chevron-back-circle"
                size={30}
                color={COLORS.lightWhite}
            />
      </TouchableOpacity>
      
      
    );
};

export default BlackBtn;
