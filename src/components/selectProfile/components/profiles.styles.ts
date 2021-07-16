import styled from "styled-components";

export const ProfilesContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
`;

export const ProfileWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.outset.first};
  margin-bottom: 12px;
`;

export const Txt = styled.span`
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.fontSizes.h4};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
`;
