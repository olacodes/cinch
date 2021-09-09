import React from "react";
import { Spacer } from "src/components/spacer";
import { Button } from "src/components/button";
import { decode } from "html-entities";
import { Text } from "src/components/typography/text.component";
import {
  SafeAreaCont,
  Wrapper,
  ImageWrapper,
  ImageStyles,
  TextWrapper,
  TextCont,
  Dot,
  DotContainer,
  BackBtnCont,
  ButtonContainer,
  SkipBtnCont,
} from "./styles";

const SecondWalkthrough = ({ navigation }) => {
  // HTML element not working on Android
  const arrow = decode("&#8592;", { level: "html5" });
  return (
    <Wrapper>
      <SafeAreaCont>
        <ImageWrapper>
          <ImageStyles source={require("src/assets/images/sittingLady.png")} />
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
                onPress={() => navigation.navigate("FirstWalkthrough")}
              />
            </BackBtnCont>
            <Spacer size="xLarge" position="horizontal" />
            <SkipBtnCont>
              <Button
                title="SKIP"
                onPress={() => navigation.navigate("Auth")}
              />
            </SkipBtnCont>
          </ButtonContainer>
        </TextWrapper>
      </SafeAreaCont>
    </Wrapper>
  );
};

export default SecondWalkthrough;
