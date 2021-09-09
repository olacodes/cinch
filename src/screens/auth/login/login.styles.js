import styled from "styled-components";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Container = styled.View`
  margin: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.primary};
  flex: 1;
  border-radius: ${(props) => props.theme.sizes[2]};
  justify-content: space-between;
  padding: ${(props) => props.theme.space[4]};
`;

export const TopContent = styled.View`
  margin-top: ${(props) => props.theme.space[5]};
`;

export const BottomContent = styled.View`
  flex: 1;
`;

export const TextContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: 5px;
  border-radius: ${(props) => props.theme.space[4]};
  height: 108;
  width: 100%;
`;

export const LineStyle = styled.View`
  border: 0.5px solid ${(props) => props.theme.colors.text.disabled};
`;

export const SocialListCont = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
