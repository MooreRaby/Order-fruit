import {
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import CartItem from "./CartItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import useFetchCart from "../../hook/useFetchCart"

const Separator = () => <View style={styles.itemSeparator} />;
const rightSwipeActionsWidth = 120;

const CartList = () => {
  const { data, isLoading, error } = useFetchCart()
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center", marginVertical: 20 }}>
          Swipe right or left
        </Text>
        <FlatList
          data={ data }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CartItem {...item} />}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
