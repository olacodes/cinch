import styled from "styled-components";
import { StyleSheet } from "react-native";

export const FormContent = styled.View`
  flex: 1;
`;

export const BottomContent = styled.View``;

export const InputFormCont = styled.View`
  border: 2px solid green;
  border-radius: ${(props) => props.theme.sizes[2]};
  background-color: white;
`;
export const Line = styled.View`
  width: 92%;
  padding: 1px;
  background-color: #dadada;
  margin: 0 auto;
`;
export const ErrMsgCont = styled.View`
  width: 95%;
  margin: 0 auto;
`;
export const InputButtonCont = styled.View``;
export const styles = StyleSheet.create({
  input: {
    padding: 15,
  },
  first: {
    borderTopEndRadius: 16,
  },
  last: {
    borderBottomEndRadius: 16,
  },
});
