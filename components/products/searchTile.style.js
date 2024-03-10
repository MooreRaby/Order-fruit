import { StyleSheet } from "react-native";
import { SIZES, COLORS, SHADOWS } from "../../contants";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: SIZES.small,
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor:COLORS.lightWhite
  },
  image: {
    width: 80,
    height:70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  productImg: {
    width: '100%',
    height: "100%",
    borderRadius: SIZES.small,
    resizeMode: "cover"
  }, 
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  productTitle: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    color: COLORS.primary
  },
  productSupplier: {
    fontSize: SIZES.small + 2,
    fontFamily: 'regular',
    color: COLORS.gray,
    marginTop: 3
  }
})

export default styles;