import React from "react";
import styled, { useTheme } from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xLarge: 4,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  bottom: "marginBottom",
  left: "marginLeft",
  all: "margin",
  vertical: "marginVertical",
  horizontal: "marginHorizontal",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const positionValue = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${positionValue}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
