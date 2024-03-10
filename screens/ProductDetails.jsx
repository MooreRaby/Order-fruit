import { Image, Text, View } from "react-native";
import React, { useState } from "react";
import {
    Ionicons,
    SimpleLineIcons,
    MaterialCommunityIcons,
    Fontisto,
} from "@expo/vector-icons";
import styles from "./productDetail.style";
import { COLORS, SIZES } from "../contants";
import { TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ProductDetails = ({ navigation }) => {
    const route = useRoute();
    const { cartItem } = route.params;
    console.log(cartItem)
    const [ count, setCount ] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = async () => {
        const id = await AsyncStorage.getItem('id')
        const userId = `user${JSON.parse(id)}`;
        const quantity = parseInt(count, 10)
        console.log(userId)

        const data = { userId, cartItem, quantity }
        console.log(data)

        const enpoint = 'http://rest-api.phuquy.info.vn/api/cart'
        const response = await axios.post(enpoint, data)
        if (response.status === 200) {
            console.log("Cart added successfully")
        } else {
            console.log(response.status)
            console.log("Cart failed")
        }
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.upperRow }>
                <TouchableOpacity onPress={ () => navigation.goBack() }>
                    <Ionicons name="chevron-back-circle" size={ 30 } />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="heart" size={ 30 } color={ COLORS.primary } />
                </TouchableOpacity>
            </View>
            <Image
                source={ {
                    uri: cartItem.imageUrl,
                } }
                style={ styles.image }
            />
            <View style={ styles.details }>
                <View style={ styles.titleRow }>
                    <Text style={ styles.title }>{ cartItem.title }</Text>
                    <View style={ styles.priceWrapper }>
                        <Text style={ styles.price }>$ { cartItem.price }</Text>
                    </View>
                </View>


                <View style={ styles.ratingRow }>
                    <View style={ styles.rating }>
                        { [ 1, 2, 3, 4, 5 ].map((index) => (
                            <Ionicons key={ index } name="star" size={ 24 } color={ "gold" } />
                        )) }
                        <Text style={ styles.ratingText }> (4.8)</Text>
                    </View>
                    <View style={ styles.rating }>
                        <TouchableOpacity
                            onPress={ () => {
                                decrement();
                            } }
                        >
                            <SimpleLineIcons name="minus" size={ 20 } />
                        </TouchableOpacity>
                        <Text style={ styles.ratingText }>{ count }</Text>

                        <TouchableOpacity
                            onPress={ () => {
                                increment();
                            } }
                        >
                            <SimpleLineIcons name="plus" size={ 20 } />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.descriptionWrapper }>
                    <Text style={ styles.description }>Description</Text>
                    <Text style={ styles.descText }>{ cartItem.description }</Text>
                </View>
                <View style={ { marginBottom: SIZES.small } }>
                    <View style={ styles.location }>
                        <View style={ { flexDirection: "row" } }>
                            <Ionicons name="location-outline" size={ 20 } />
                            <Text>{ cartItem.product_location }</Text>
                        </View>

                        <View style={ { flexDirection: "row" } }>
                            <MaterialCommunityIcons name="truck-delivery-outline" size={ 20 } />
                            <Text> { "  Free Delivery" }</Text>
                        </View>
                    </View>
                </View>

                <View style={ styles.cartRow }>
                    <TouchableOpacity onPress={ () => { } } style={ styles.cartBtn }>
                        <Text style={ styles.cartTitle }>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => addToCart() } style={ styles.addCart }>
                        <Fontisto name="shopping-bag" size={ 22 } color={ COLORS.white } />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductDetails;
