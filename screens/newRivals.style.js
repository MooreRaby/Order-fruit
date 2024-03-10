import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../contants/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  }, uppperRow: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  }
})
export default styles;