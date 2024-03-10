import { Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./cart.style";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../contants";
import { TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CartList from "../components/cart/CartList";
import { useState } from "react";

const cartRoute = () => {
  return <CartList />;
};

const buyAgainRoute = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    }}
  >
    <Text>Second Route Content</Text>
  </View>
);

const renderScene = SceneMap({
  first: cartRoute,
  second: buyAgainRoute
});

const Cart = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: "first", title: "All" },
    { key: "second", title: "Buy again" }
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#96C5D3" }}
      style={{ backgroundColor: "white" }}
      labelStyle={{ color: "black", textDecorationStyle: "dotted" }}
      activeColor={"#96C5D3"}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={24} />
        </TouchableOpacity>
        <Text style={styles.titlePage}>My Cart</Text>
      </View>
      <TabView
        style={styles.tabView}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled={false}
      />
    </SafeAreaView>
  );
};

export default Cart;
