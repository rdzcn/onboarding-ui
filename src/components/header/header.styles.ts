import styled from "styled-components";
import mediaSizes from "../../assets/styles/mediaTypes";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 64px 0;
`;

export const HeaderLogo = styled.img`
  width: 80%;

  @media (min-width: ${mediaSizes.desktop}em) {
    width: 30rem;
  }
`;
