import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
    primary: "#2A4D50",
    secondary: "#DDF0FF",
    tertiary: "#FF7754",

    gray: "#83829a",
    gray2: "#C1C0C8",

    offwhite: "#F3F4F8",
    white: "#FFFFFF",
    black: "#000000",
    red: "#EB1E4D",
    green: "#00c135",
    lightWhite: "#FAFAFC",
    freshGreen:"#00c135",
    transparnt: "#00000000 ",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
