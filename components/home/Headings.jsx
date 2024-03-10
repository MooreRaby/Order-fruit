import { Text, View } from "react-native";
import React from "react";
import styles from "./headings.style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../contants";
import { useNavigation } from "@react-navigation/native";

const Headings = () => {
    const navigation = useNavigation();
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Text style={ styles.headerTitle }>Best Seller</Text>
                <TouchableOpacity onPress={ () => { navigation.navigate("ProductList") } }>
                    <Ionicons
                        name="grid-outline"
                        size={ 24 }
                        color={ COLORS.primary }
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Headings;
