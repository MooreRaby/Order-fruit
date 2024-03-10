import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./newRivals.style.js";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../contants/theme.js";
import ProductList from "../components/products/ProductList.jsx";

const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.wrapper }>
        <View style={ styles.uppperRow }>
          <TouchableOpacity
            onPress={ () => navigation.goBack() }
          >
            <Ionicons name="chevron-back-circle" size={ 30 } color={ COLORS.lightWhite } />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
