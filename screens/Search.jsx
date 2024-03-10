import { View, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../contants";
import styles from "./search.style";
import { TextInput } from "react-native";
import axios from "axios";
import { Text } from "react-native";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
    const [ searchKey, setSearchKey ] = useState("");
    const [ searchResults, setSearchResults ] = useState("");
    console.log(searchResults);

    // http://192.168.0.105:3001/api/products/search/
    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `http://rest-api.phuquy.info.vn/api/products/search/${searchKey}`
            );
            setSearchResults(response.data);
            // response.data
        } catch (error) {
            console.log("failed to get products", error);
        }
    };

    return (
        <SafeAreaView>
            <View style={ styles.searchContainer }>
                <TouchableOpacity>
                    <Ionicons
                        name="camera-outline"
                        size={ SIZES.xLarge }
                        style={ styles.searchIcon }
                    />
                </TouchableOpacity>
                <View style={ styles.searchWrapper }>
                    <TextInput
                        style={ styles.searchInput }
                        value={ searchKey }
                        onChangeText={ setSearchKey }
                        placeholder="What are you looking for"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={ styles.searchBtn }
                        onPress={ () => handleSearch() }
                    >
                        <Feather
                            name="search"
                            size={ SIZES.xLarge }
                            color={ COLORS.offwhite }
                        />
                    </TouchableOpacity>
                </View>
            </View>
            { searchResults.length === 0 ? (
                <View style={ { flex: 1 } }>
                    <Image
                        style={ styles.searchImage }
                        source={ require("../assets/search.png") }
                    />
                </View>
            ) : (
                <FlatList
                    data={ searchResults }
                    keyExtractor={ (item) => item._id }
                    renderItem={ ({ item }) => (<SearchTile item={ item } />) }
                    style={ { marginHorizontal: 12 } }
                />
            ) }
        </SafeAreaView>
    );
};

export default Search;
