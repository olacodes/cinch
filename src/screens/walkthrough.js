import React from "react";
import styled from "styled-components";
import { StatusBar, SafeAreaView, Image, View } from "react-native";
import { Button } from "../components/button";
import { Spacer } from "../components/spacer";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Walkthrough = ({ navigation, ...props }) => {
  console.log(navigation);
  return (
    <SafeAreaViewCont>
      <Container>
        <ImageWrapper>
          <ImageContainer>
            <BackgroundImage
              source={require("../assets/images/standinglady.png")}
            />
          </ImageContainer>
        </ImageWrapper>

        <TextWrapper>
          <Topic>Cinch Distro</Topic>
          <View>
            <Header>Earn revenue on your music for life.</Header>
            <SubHeader>
              Make life better with music and endless inspiration
            </SubHeader>
          </View>
          <Spacer>
            <Button
              title="Next"
              onPress={() => navigation.navigate("Walkthrough2")}
            />
          </Spacer>
        </TextWrapper>
      </Container>
    </SafeAreaViewCont>
  );
};

const SafeAreaViewCont = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Container = styled.View`
  padding: 0 20px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ImageContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 36px;
`;
const ImageWrapper = styled.View`
  flex: 1;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
`;

const TextWrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 40px;
  padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[4]};
  justify-content: space-between;
`;

const Topic = styled.Text`
  color: ${(props) => props.theme.colors.text.tertiary};
  padding-top: ${(props) => props.theme.space[4]};
  text-transform: uppercase;
`;

const Header = styled.Text`
  font-size: ${RFPercentage(4)}px;
  color: ${(props) => props.theme.colors.text.primary};
  line-height: ${(props) => props.theme.lineHeights.title};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: ${(props) => props.theme.space[4]} 0;
`;

const SubHeader = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
  line-height: ${(props) => props.theme.lineHeights.copy};
  margin-bottom: ${(props) => props.theme.space[4]};
`;

export default Walkthrough;
