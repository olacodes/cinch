import styled from "styled-components";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
    line-height: ${theme.lineHeights.body}
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.title};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
    font-size: ${theme.fontSizes.body};
`;

const title = (theme) => `
    font-size: ${theme.fontSizes.title};
    font-family: ${theme.fonts.title};
`;

const caption = (theme) => `
  color: ${theme.colors.text.tertiary};
  text-transform: uppercase;`;

const variants = {
  body,
  hint,
  title,
  error,
  caption,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
