import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: 30px;
    line-height: 1.5;
    font-weight: bold;
  }

  & > img {
    margin-top: 120px;
  }
`;
