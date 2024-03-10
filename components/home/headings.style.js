import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../contants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginHorizontal: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.xLarge - 2,
        fontWeight: "bold",
    },
});

export default styles;
