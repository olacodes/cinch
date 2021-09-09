import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "src/components/spacer";
import { Text } from "src/components/typography/text.component";

const LoadingPage = ({ navigation, ...props }) => (
  <TouchableOpacity
    style={{ flex: 1 }}
    onPress={() => navigation.navigate("Walkthrough")}
  >
    <LoadingCont>
      <Image source={require("src/assets/images/icon.png")} />
      <Spacer position="top" size="medium">
        <Text className="text">Cinch Distro</Text>
      </Spacer>
    </LoadingCont>
  </TouchableOpacity>
);

const LoadingCont = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;

export default LoadingPage;
