import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import styled from "styled-components";
import { Spacer } from "../components/spacer";
import { Button } from "../components/button";

const Walkthrough2 = ({ navigation }) => {
  return (
    <Wrapper>
      <SafeAreaCont>
        <ImageWrapper>
          <ImageStyles source={require("../assets/images/sittingLady.png")} />
        </ImageWrapper>

        <TextWrapper>
          <Spacer />
          <Topic>Revenue</Topic>
          <View>
            <HeaderStyles>
              Business opportunities for creative industry.
            </HeaderStyles>

            <SubHeader>
              Make life better with music and endless inspiration
            </SubHeader>
          </View>

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
                title="&#8592;"
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

const Topic = styled.Text`
  color: ${(props) => props.theme.colors.text.tertiary};
  text-transform: uppercase;
`;

const HeaderStyles = styled.Text`
  font-size: ${RFPercentage(4)};
  text-align: center;
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const SubHeader = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-size: ${RFPercentage(2)};
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
