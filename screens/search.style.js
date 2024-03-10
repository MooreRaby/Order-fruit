import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../contants/index";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeTxt: (color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge - 6,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small,
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginHorizontal: SIZES.small,
        marginVertical: SIZES.medium,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
    },
    searchImage: {
        resizeMode: 'contain',
        width: SIZES.width -30,
        height: SIZES.height -180,
    }
});

export default styles;
