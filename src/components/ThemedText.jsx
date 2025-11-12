import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextButton: {
    color: theme.colors.textButton,
  },
  colorTextError: {
    color: theme.colors.errorText,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const ThemedText = ({
  color,
  fontSize,
  fontWeight,
  style,
  children,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "textButton" && styles.colorTextButton,
    color === "errorText" && styles.colorTextError,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {children}
    </NativeText>
  );
};

export default ThemedText;
