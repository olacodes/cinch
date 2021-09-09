import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import styled from "styled-components";

export const Social = ({ name, color }, ...props) => {
  return (
    <Container>
      <ImageCont>
        <FontAwesome name={name} size={24} color={color} />
      </ImageCont>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 0px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);
`;

const ImageCont = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;
