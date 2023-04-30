import { StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "@components/StyledText";
import colors from "@theme/colors";
import sizes from "@theme/sizes";

type Props = {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <StyledText style="button">{label}</StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: sizes.s16,
    borderRadius: sizes.borderRadius,
    backgroundColor: colors.buttonBackground,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
