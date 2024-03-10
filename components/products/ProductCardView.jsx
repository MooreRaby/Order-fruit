import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./productCardView.style";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();
  const cartItem = item
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { cartItem });
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {item.supplier}
          </Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={('#00c135')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCardView);
