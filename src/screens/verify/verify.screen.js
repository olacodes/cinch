import React from "react";
import { Text } from "src/components/typography/text.component";
import styled from "styled-components";
import { Spacer } from "src/components/spacer";

const VerifyScreen = () => (
  <VerifyContainer>
    <Text variant="title"> Verify Screen </Text>
    <Spacer position="top" size="xLarge">
      <Text> coming Soonest... </Text>
    </Spacer>
  </VerifyContainer>
);

const VerifyContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
  align-items: center;
`;
export default VerifyScreen;
