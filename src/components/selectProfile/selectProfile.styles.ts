import styled from "styled-components";

export const SelectProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 36px;

  & > button:not(:last-child) {
    margin-right: 24px;
  }
`;
