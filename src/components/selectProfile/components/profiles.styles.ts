import styled, { css } from "styled-components";
import mediaSizes from "../../../assets/styles/mediaTypes";

export const ProfilesContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  flex-wrap: wrap;
`;

export const ProfileSelector = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Avatar = styled.img<{ size?: "md" | "lg" }>`
  width: ${({ size = "md" }) => (size === "lg" ? "256px" : "120px")};
  height: ${({ size = "md" }) => (size === "lg" ? "256px" : "120px")};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.outset.first};
  margin-bottom: 12px;
`;

export const ProfileCardWrapper = styled.div<{ isFocus: boolean }>`
  ${({ isFocus, theme }) => css`
    padding: 6px;
    box-shadow: ${theme.shadows.outset.first};
    border-radius: ${theme.borderRadius.small};
    margin: 0 12px 12px 0;

    ${isFocus &&
    css`
      box-shadow: 0 0 3px 6px ${theme.colors.blue[15]};
    `}

    @media (min-width: ${mediaSizes.desktop}em) {
      margin: 0;

      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  `}
`;
