import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

export const SafeAreaCont = styled(SafeAreaView)`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: black;
`;
export const ImageWrapper = styled.View``;
export const ImageStyles = styled.Image`
  top: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
`;

export const TextWrapper = styled.View`
  flex: 1;
  top: -12px;
  border-radius: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const TextCont = styled.View`
  align-items: center;
`;

export const DotContainer = styled.View`
  flex-direction: row;
`;

export const Dot = styled.View`
  padding: 3px;
  margin: 1px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.text.primary};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SkipBtnCont = styled.View`
  flex: 5;
`;

export const BackBtnCont = styled.View`
  flex: 2;
`;
