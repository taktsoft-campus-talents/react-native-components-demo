import { View } from "react-native";
import { StyledButton } from "../components/StyledButton";
import { StyledText } from "../components/StyledText";

export default function ContactPage() {
  return (
    <View>
      <StyledText variant="headline">Contact Page</StyledText>
      <StyledButton
        title="Add Contact"
        onPress={() => console.debug("Add Contact")}
      />
    </View>
  );
}
