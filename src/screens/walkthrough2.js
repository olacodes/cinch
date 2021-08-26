import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import { Spacer } from "../components/spacer";
import { Button } from "../components/button";
import { decode } from "html-entities";
import { Text } from "../components/typography/text.component";

const Walkthrough2 = ({ navigation }) => {
  // HTML element not working on Android
  const arrow = decode("&#8592;", { level: "html5" });
  return (
    <Wrapper>
      <SafeAreaCont>
        <ImageWrapper>
          <ImageStyles source={require("../assets/images/sittingLady.png")} />
        </ImageWrapper>

        <TextWrapper>
          <Spacer />
          <TextCont>
            <Text variant="caption">Revenue</Text>
            <Spacer position="vertical" size="large">
              <Text variant="title" style={{ textAlign: "center" }}>
                Business opportunities for creative industry.
              </Text>
            </Spacer>

            <Text style={{ textAlign: "center" }}>
              Make life better with music and endless inspiration
            </Text>
          </TextCont>

          <DotContainer>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </DotContainer>

          <ButtonContainer>
            <BackBtnCont>
              <Button
                title={arrow}
                backgroundColor="white"
                onPress={() => navigation.navigate("Walkthrough")}
              />
            </BackBtnCont>
            <Spacer size="xLarge" position="horizontal" />
            <SkipBtnCont>
              <Button title="SKIP" />
            </SkipBtnCont>
          </ButtonContainer>
        </TextWrapper>
      </SafeAreaCont>
    </Wrapper>
  );
};

export default Walkthrough2;

const SafeAreaCont = styled(SafeAreaView)`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: black;
`;
const ImageWrapper = styled.View``;
const ImageStyles = styled.Image`
  top: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
`;

const TextWrapper = styled.View`
  flex: 1;
  top: -12px;
  border-radius: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const TextCont = styled.View`
  align-items: center;
`;

const DotContainer = styled.View`
  flex-direction: row;
`;

const Dot = styled.View`
  padding: 3px;
  margin: 1px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.text.primary};
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const SkipBtnCont = styled.View`
  flex: 5;
`;

const BackBtnCont = styled.View`
  flex: 2;
`;
