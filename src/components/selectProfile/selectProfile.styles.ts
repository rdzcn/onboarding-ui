import styled from "styled-components";

export const SelectProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Txt = styled.span`
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.fontSizes.h4};
  line-height: ${({ theme }) => theme.typography.lineHeights.large};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;

  & > button:not(:last-child) {
    margin-right: 24px;
  }
`;
