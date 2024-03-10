import { Dimensions, StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../contants/theme";
import LinearGradient from "react-native-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 10,
    borderColor: "#E2E3E5",
    flexDirection: "column",
  },
  nameProduct: {
    fontSize: 14,
    width: "100%",
    color: "black",
    fontFamily: "regular",
    backgroundColor: 'black',
  },
  description: {
    fontSize: 12,
    color: "#888888",
    width: "100%",
    fontWeight: "500",
    marginTop: 7,
    backgroundColor: "#F88F8F8",
  },
  rightAction: {
    backgroundColor: "grey",
    width: "auto",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  productWrap: {
    flexDirection: "column",
    paddingVertical: 15,
  },
  checkbox: {
    marginTop: 20,
    marginRight: 10,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 1,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 6,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "white",
    alignItems: "center",
    alignSelf: "center",
  },
  swipaView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default styles;
