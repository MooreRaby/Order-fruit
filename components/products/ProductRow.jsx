import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../contants";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";
import useFetchProduct from "../../hook/useFetchProduct"

const ProductRow = () => {
  const { data, isLoading, error } = useFetchProduct();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          initialNumToRender={7}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
