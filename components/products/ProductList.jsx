import { View } from "react-native";
import React from "react";
import useFetchProduct from "../../hook/useFetchProduct";
import { SIZES, COLORS } from "../../contants";
import styles from "./productList.style";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetchProduct();
  console.log(data);
  console.log("abcd");
  if (isLoading) {
    return (
      <View style={styles.isLoading}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
