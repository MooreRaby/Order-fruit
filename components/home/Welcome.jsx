import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import styles from "./Welcome.style";
import { COLORS, SIZES } from "../../contants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
                    {" "}
                    Fresh Fruit
                </Text>
                <Text style={styles.welcomeTxt2(COLORS.primary,-8)}>
                    {" "}
                    Fresh fruit
                </Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather
                        name="search"
                        size={24}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate("Search")}
                        placeholder="Search..."
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons
                            name="mic-circle-outline"
                            size={SIZES.xLarge}
                            color={COLORS.offwhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Welcome;
