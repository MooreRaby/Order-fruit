import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { SIZES, COLORS } from "../contants";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import {
    MaterialCommunityIcons,
    SimpleLineIcons,
    AntDesign,
} from "@expo/vector-icons";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
    const [ userData, setUserData ] = useState(null);
    const [ userLogin, setUserLogin ] = useState(false);

    useEffect(() => {
        checkExistingUser();
    })

    const checkExistingUser = async () => {
        const id = await AsyncStorage.getItem('id')
        const useId = `user${JSON.parse(id)}`;

        try {
            const currentUser = await AsyncStorage.getItem(useId);


            if (currentUser !== null) {
                const parseData = JSON.parse(currentUser)
                setUserData(parseData)
                setUserLogin(true)
            } else {
                navigation.navigate("Login")
            }
        } catch (error) {
            console.log("error retrieving the data", error)
        }
    }

    const clearCache = () => {
        Alert.alert(
            "Clear Cache",
            "Are you sure you want to delete all saved data on your device",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("cancel clear cache"),
                },
                {
                    text: "Continue",
                    onPress: () => console.log("Clear cache pressed"),
                },
            ]
        );
    };

    const userLogout = async () => {
        const id = await AsyncStorage.getItem('id')
        const useId = `user${JSON.parse(id)}`
        try {
            await AsyncStorage.multiRemove([ useId, 'id' ]);
            navigation.replace('Bottom Navigation');
        } catch (error) {
            console.log("Error loggin out the user", error)
        }
    }

    const logout = () => {
        Alert.alert("Logout", "Are you sure you want to log out", [
            {
                text: "Cancel",
                onPress: () => console.log("cancel pressed"),
            },
            {
                text: "Continue",
                onPress: () => userLogout()
            },
            // { defaultIndex: 1 },
        ]);
    };

    const deleteAcount = () => {
        Alert.alert(
            "Delete Acount",
            "Are you sure you want to Delete Account",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("cancel delete acount pressed"),
                },
                {
                    text: "Continue",
                    onPress: () =>
                        console.log("continue dellete account pressed"),
                },
                { defaultIndex: 1 },
            ]
        );
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.container }>
                <StatusBar translucent style="dark" />

                <View style={ { width: "100%" } }>
                    <Image
                        source={ require("../assets/space.jpg") }
                        style={ styles.cover }
                    />
                </View>
                <View style={ styles.profileContainer }>
                    <Image
                        source={ require("../assets/images/avatar.jpg") }
                        style={ styles.profile }
                    />
                    <Text style={ styles.name }>
                        { userLogin === true
                            ? userData.username
                            : "Please Login into your account" }
                    </Text>
                    { userLogin === false ? (
                        <TouchableOpacity
                            onPress={ () => navigation.navigate("Login") }
                        >
                            <View style={ styles.loginBtn }>
                                <Text style={ styles.menuText }>
                                    { " " }
                                    { "L O G I N" }
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <View style={ styles.loginBtn }>
                            <Text style={ styles.menuText }>
                                { userData.email }
                            </Text>
                        </View>
                    ) }

                    { userLogin === false ? (
                        <View></View>
                    ) : (
                        <View style={ styles.menuWrapper }>
                            <TouchableOpacity
                                onPress={ () => navigation.navigate("Favorites") }
                            >
                                <View style={ styles.menuItem(0.2) }>
                                    <MaterialCommunityIcons
                                        name="heart-outline"
                                        color={ COLORS.primary }
                                        size={ 24 }
                                    />
                                    <Text style={ styles.menuText }>
                                        Favorites
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate("Orders") }
                            >
                                <View style={ styles.menuItem(0.2) }>
                                    <MaterialCommunityIcons
                                        name="truck-delivery-outline"
                                        color={ COLORS.primary }
                                        size={ 24 }
                                    />
                                    <Text style={ styles.menuText }>Orders</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={ () => navigation.navigate("Cart") }
                            >
                                <View style={ styles.menuItem(0.2) }>
                                    <SimpleLineIcons
                                        name="bag"
                                        color={ COLORS.primary }
                                        size={ 24 }
                                    />
                                    <Text style={ styles.menuText }>Carts</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ () => clearCache() }>
                                <View style={ styles.menuItem(0.2) }>
                                    <MaterialCommunityIcons
                                        name="cached"
                                        color={ COLORS.primary }
                                        size={ 24 }
                                    />
                                    <Text style={ styles.menuText }>
                                        Clear Cache
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ () => deleteAcount() }>
                                <View style={ styles.menuItem(0.2) }>
                                    <AntDesign
                                        name="deleteuser"
                                        color={ COLORS.primary }
                                        size={ 24 }
                                    />
                                    <Text style={ styles.menuText }>
                                        Delete Account
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ () => logout() }>
                                <View style={ styles.menuItem(0.2) }>
                                    <AntDesign
                                        name="logout"
                                        color={ COLORS.primary }
                                        size={ 24 }
                                    />
                                    <Text style={ styles.menuText }>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) }
                </View>
            </View>
        </View>
    );
};

export default Profile;
