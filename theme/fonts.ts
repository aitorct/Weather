import { TextStyle } from "react-native";

const fontSizes = {
  L: 24,
  XL: 32,
  XXL: 48,
};

const fontWeight = {
  bold: "bold",
  semibold: "500",
};

export default {
  subtitle: {
    fontSize: fontSizes.L,
    fontWeight: fontWeight.semibold,
  },
  title: {
    fontSize: fontSizes.XL,
    fontWeight: fontWeight.bold,
  },
  header: {
    fontSize: fontSizes.XXL,
    fontWeight: fontWeight.bold,
  },
} as Record<string, TextStyle>;
