import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const LoadingPage = ({ navigation, ...props }) => (
  <TouchableOpacity
    style={{ flex: 1 }}
    onPress={() => navigation.navigate("Walkthrough")}
  >
    <LoadingCont>
      <Image source={require("../assets/images/icon.png")} />
      <LoadingText className="text">Cinch Distro</LoadingText>
    </LoadingCont>
  </TouchableOpacity>
);

const LoadingCont = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  padding: 10px;
  text-transform: uppercase;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.body};
`;

export default LoadingPage;
