import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";

import styles from "./home.style";
import { TouchableOpacity } from "react-native";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkExistingUser();
  });

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parseData = JSON.parse(currentUser);
        setUserData(parseData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("error retrieving the data", error);
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#e5eaf0'}}>
      <SafeAreaView>
        <StatusBar translucent style="dark" />

        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name="location-outline" size={24} />

            <Text style={styles.location}>
              {" "}
              {userData ? userData.location : "China"}{" "}
            </Text>

            <TouchableOpacity
              style={{ alignItems: "flex-end" }}
              onPress={() => navigation.navigate("Cart")}
            >
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>8</Text>
              </View>

              <View>
                <Fontisto name="shopping-bag" size={24}></Fontisto>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ marginBottom: 80 }}>
          <Welcome />
          <Carousel />
          <Headings />
          <ProductRow />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
