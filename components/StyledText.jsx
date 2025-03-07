import { Text, StyleSheet } from "react-native";

export function StyledText({ variant = "paragraph", children }) {
  console.log(variant);
  return <Text style={[styles.defaultText, styles[variant]]}>{children}</Text>;
}

const styles = StyleSheet.create({
  defaultText: {
    marginBottom: 12,
  },
  headline: {
    fontSize: 28,
    color: "#fb5607",
    fontWeight: "bold",
  },
  subheadline: {
    fontSize: 24,
    color: "#4c5b5c",
  },
  paragraph: {
    fontSize: 20,
  },
  linktext: {
    fontSize: 20,
    color: "#3a6ea5",
  },
});
