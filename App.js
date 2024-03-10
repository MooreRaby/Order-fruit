import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart, ProductDetails, NewRivals, Orders, Favorites } from "./screens";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/Payment";
import PaymentBill from "./screens/PaymentBill";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  // Sử dụng hook useFonts để tải font
  const loadFonts = async () => {
    useFonts({
      'semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'bold': require('./assets/fonts/Poppins-Bold.otf')
    });
    setFontsLoaded(true);
  };

  // Tải font khi ứng dụng được khởi chạy
  useEffect(() => {
    loadFonts();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={ BottomTabNavigation }
          options={ { headerShown: false } }
        />

        <Stack.Screen
          name="Cart"
          component={ Cart }
          options={ { headerShown: false } }
        />
        <Stack.Screen
          name="ProductDetails"
          component={ ProductDetails }
          options={ { headerShown: false } }
        />
        <Stack.Screen
          name="ProductList"
          component={ NewRivals }
          options={ { headerShown: false } }
        />
        <Stack.Screen
          name="Login"
          component={ Login }
          options={ { headerShown: false } }
        />

        <Stack.Screen
          name="Orders"
          component={ Orders }
          options={ { headerShown: false } }
        />

        <Stack.Screen
          name="Favorites"
          component={ Favorites }
          options={ { headerShown: false } }
        />

        <Stack.Screen
          name="Signup"
          component={ Signup }
          options={ { headerShown: false } }
        />

        <Stack.Screen
          name="Payment"
          component={ Payment }
          options={ { headerShown: false } }
        />

        <Stack.Screen
          name="PaymentBill"
          component={ PaymentBill }
          options={ { headerShown: false } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;