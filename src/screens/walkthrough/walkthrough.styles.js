import styled from "styled-components";

export const SafeAreaViewCont = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Container = styled.View`
  padding: 0 20px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ImageContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: 36px;
`;
export const ImageWrapper = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.Image`
  width: 100%;
`;

export const TextWrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 40px;
  padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[4]};
  justify-content: space-between;
`;
