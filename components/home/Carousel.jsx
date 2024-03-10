import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../contants";

const Carousel = () => {
    const slides = [
        "https://th.bing.com/th/id/OIP.M17kAPCI_4D8a7ocMR-WwQHaFj?w=207&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.rjzxq9xinJfq6E1uGst7GgHaEo?w=249&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.wJ-PPomCmTCZnOzcXufnZQHaE7?w=252&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.Yn5EFMh4vloSHKgw-wlp2QHaEo?w=233&h=180&c=7&r=0&o=5&pid=1.7",
    ];

    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{
                    borderRadius: 15,
                    width: "92%",
                    marginTop: 15,
                }}
                autoplay
                circleLoop
            />
        </View>
    );
}

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    },
});
