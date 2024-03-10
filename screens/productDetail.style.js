import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../contants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
    },
    image: {
        aspectRatio: 1.2,
        resizeMode: "cover",
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
        paddingVertical: -2,
        paddingHorizontal: 12
    },
    price: {
        fontFamily: "semibold",
        fontSize: SIZES.large,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20,
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5,
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large,
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: "medium",
        marginHorizontal: SIZES.xSmall,
    },
    descriptionWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large,
    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large - 2,
    },
    descText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small,
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,
    },


    location: {
        marginHorizontal: SIZES.small,
        borderRadius: SIZES.large,
        backgroundColor: COLORS.secondary,
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartRow: {
        flexDirection: "row",

        margin: SIZES.small,
        justifyContent: "space-between",
    },
    cartBtn: {
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.black,
        paddingHorizontal: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        width: "80%",
    },
    cartTitle: {
        borderRadius: SIZES.medium,
        color: COLORS.offwhite,
        fontFamily: 'bold'
    },
    addCart: {
        backgroundColor: Colors.black,
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderRadius: 50,
        marginRight: 10
    },
});

export default styles;
