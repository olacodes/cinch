import React from "react";
import { Button } from "../../components/button";
import { Spacer } from "../../components/spacer";
import { Text } from "../../components/typography/text.component";
import {
  SafeAreaViewCont,
  ImageWrapper,
  Container,
  ImageContainer,
  TextWrapper,
  BackgroundImage,
} from "./walkthrough.styles";

const Walkthrough = ({ navigation }) => {
  return (
    <SafeAreaViewCont>
      <Container>
        <ImageWrapper>
          <ImageContainer>
            <BackgroundImage
              source={require("../../assets/images/standinglady.png")}
            />
          </ImageContainer>
        </ImageWrapper>

        <TextWrapper>
          <Spacer />
          <Spacer>
            <Text variant="caption">Cinch Distro</Text>
            <Spacer position="vertical" size="large">
              <Text variant="title">Earn revenue on your music for life.</Text>
            </Spacer>
            <Text>Make life better with music and endless inspiration</Text>
          </Spacer>
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

export default Walkthrough;
