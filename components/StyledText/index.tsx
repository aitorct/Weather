/* eslint-disable react-native/no-unused-styles */

import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "@theme/colors";
import fonts from "@theme/fonts";

type TextStyle = "header" | "title" | "subtitle" | "button" | "text";

type Props = {
  style: TextStyle;
  children: string;
};

const StyledText = ({ style, children }: Props) => {
  const textStyle = [styles.base, styles[style]];

  return (
    <Text testID={`Text: ${children}`} style={textStyle}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: fonts.header,
  title: fonts.title,
  subtitle: fonts.subtitle,
  text: fonts.text,
  button: {
    ...fonts.button,
    color: colors.buttonText,
  },
  base: {
    color: colors.text,
  },
});

export default StyledText;
