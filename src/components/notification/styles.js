import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(10px);
  }

  to {
   transform: translateY(0px);
  }
`;
export const Notification = styled.div`
  color: rgb(220, 53, 69);
  max-height: 0;
  opacity: 0;
  margin: 0;
  transition: max-height 100ms linear, opacity 500ms linear 100ms,
    transform 500ms linear 100ms, height 100ms linear;
  ${({ error }) =>
    error &&
    css`
      margin-top: 5px;
      margin-bottom: 10px;
      max-height: 1000px;
      opacity: 1;
      animation: ${fadeIn} 0.5s linear;
    `};
  ${({ message }) =>
    message &&
    css`
      color: #270;
      background-color: #dff2bf;
      padding: 10px;
      border-radius: 3px 3px 3px 3px;
    `}
  ${({ errormessage }) => {
    return (
      errormessage &&
      css`
        color: #d8000c;
        background-color: #ffbaba;
        padding: 10px;
        border-radius: 3px 3px 3px 3px;
      `
    );
  }}
  ${({ successmessage }) => {
    return (
      successmessage &&
      css`
        color: rgba(40, 167, 69, 1);
        background-color: rgba(40, 167, 69, 0.1);
        padding: 10px;
        border-radius: 3px 3px 3px 3px;
      `
    );
  }}
`;
