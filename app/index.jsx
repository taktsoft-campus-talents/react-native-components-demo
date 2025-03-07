import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StyledText } from "../components/StyledText.jsx";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledText variant="headline">dsfgkljhsdgfkljh</StyledText>
      <StyledText variant="subheadline">dkjfh</StyledText>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium
        molestias nulla, recusandae illo voluptates omnis dolorem est fugit sed
        ducimus earum cumque totam dolor! Illo consequatur excepturi esse
        deleniti.
      </StyledText>

      <Link href={{ pathname: "/contact" }}>
        <StyledText variant="linktext">Go to contact</StyledText>
      </Link>
    </View>
  );
}
