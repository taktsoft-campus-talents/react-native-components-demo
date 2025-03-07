import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export function StyledButton({ onPress, title }) {
  const [touchActive, setTouchActive] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          opacity: touchActive ? 0.5 : 1,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={() => setTouchActive(true)}
        onPressOut={() => setTouchActive(false)}
      >
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
  },
});
