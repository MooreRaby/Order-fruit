import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../contants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    upperRow: {
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
    },
    titlePage:{
        fontFamily: 'medium',
        fontSize: SIZES.large,
        marginLeft: 20,
        marginTop: 3,
    },tabView:{
        
        marginTop: SIZES.xxLarge
    }

})

export default styles;