import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../contants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge + 10,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    height: SIZES.height / 2.6,
    width: SIZES.width,
    aspectRatio: 16 / 12,
    resizeMode: "contain",
    marginBottom: -30,
  },
  imageLogin: {
    height: SIZES.height / 2.3,
    width: SIZES.width,
    aspectRatio: 16 / 12,
    resizeMode: "contain",
    marginBottom: -30,
  },
  form: {
    height: "100%",
    zIndex: 999,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: COLORS.offwhite,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.xLarge - 4,
    color: COLORS.primary,
    alignItems: "center",
    marginBottom: SIZES.xxLarge,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  wrapper: {
    marginBottom: 15,
    marginHorizontal: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  registration: {
    marginTop: 20,
    textAlign: "center",
  },
});

export default styles;
