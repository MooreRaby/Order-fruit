import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../contants/index";

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
    welcomeTxt2: (color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge - 10,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small,
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.white,
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
        backgroundColor: COLORS.white,
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
        borderRadius: SIZES.large,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.freshGreen,
    },
});

export default styles