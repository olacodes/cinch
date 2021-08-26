import React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import { fontSizes, fontWeights, spacing } from "../utils/sizes";
import { black, yellow } from "../utils/colors";

export const Button = ({ onPress, title, backgroundColor, color }) => {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <TouchableOpacity onPress={onPress}>
        <ButtonText color={color}>{title}</ButtonText>
      </TouchableOpacity>
    </ButtonContainer>
  );
};
const ButtonContainer = styled(TouchableOpacity)`
  padding: ${spacing.md};
  border-radius: ${spacing.md};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : yellow};
`;

const ButtonText = styled(Text)`
  text-align: center;
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.medium};
  color: ${(props) => (props.color ? props.color : black)};
`;
