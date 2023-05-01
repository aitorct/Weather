import { TextStyle } from "react-native";

export type StyleName = "header" | "title" | "subtitle" | "button" | "text";

const fontSizes = {
  M: 18,
  L: 24,
  XL: 32,
  XXL: 48,
};

const fontWeight = {
  bold: "bold",
  semibold: "500",
};

export default {
  text: {
    fontSize: fontSizes.M,
    fontWeight: fontWeight.bold,
  },
  button: {
    fontSize: fontSizes.L,
    fontWeight: fontWeight.semibold,
  },
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
} as Record<StyleName, TextStyle>;
