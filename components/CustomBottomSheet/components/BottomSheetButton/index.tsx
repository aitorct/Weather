import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "@components/StyledText";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import sizes from "@theme/sizes";

type Props = {
  onPress: () => void;
  label: string;
};

const BottomSheetButton = ({ onPress, label }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <StyledText style="text">{label}</StyledText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: sizes.s24,
    paddingVertical: sizes.s16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default BottomSheetButton;
