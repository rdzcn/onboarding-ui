import styled, { css } from "styled-components";

export type ButtonColors = "blue";
export type ButtonTypes = "primary" | "secondary";

export const PrimaryButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: inherit;
    border-radius: ${theme.borderRadius.normal};
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    background: ${theme.colors.blue[100]};
    background-clip: padding-box;
    color: ${theme.colors.grey[0]};
    height: 48px;
    width: 100%;
    text-decoration: none;
    transition: all ${theme.transitions.duration.shorter}
      ${theme.transitions.easing.easeIn};

    &:disabled {
      pointer-events: none;
      background: ${theme.colors.grey[8]};
      color: ${theme.colors.grey[40]};
    }

    &:hover {
      background: ${theme.colors.blue[70]};
      transition: all ${theme.transitions.duration.shortest}
        ${theme.transitions.easing.easeOut};
    }

    &:focus,
    &:active {
      box-shadow: 0 0 0 3px ${theme.colors.blue[100]};
    }
  `}
`;

export const SecondaryButton = styled(PrimaryButton)`
  ${({ theme }) => css`
    background: ${theme.colors.grey[0]};
    color: ${theme.colors.grey[100]};
    box-shadow: 0 0 0 1px ${theme.colors.grey[10]};
    transition: background ${theme.transitions.duration.shortest}
      ${theme.transitions.easing.easeInOut};

    &:disabled {
      box-shadow: 0 0 0 1px ${theme.colors.grey[40]};
      background: ${theme.colors.grey[0]};
    }

    &:hover {
      background: ${theme.colors.blue[15]};
    }
  `}
`;

export const ButtonInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  & + img,
  & + div {
    margin-left: 2rem;
  }
  &:not(:first-child) {
    margin-left: 2rem;
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Header = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeights.medium};
    font-size: ${theme.typography.fontSizes.text};
    line-height: ${theme.typography.lineHeights.large};
  `}
`;
