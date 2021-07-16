import styled from "styled-components";
import mediaSizes from "../../assets/styles/mediaTypes";

export const LayoutContainer = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  height: 100%;

  @media (min-width: ${mediaSizes.desktop}em) {
    width: 900px;
  }

  @media (min-width: ${mediaSizes.desktopM}em) {
    width: 960px;
  }
`;

export const ContentContainer = styled(LayoutContainer)`
  position: initial;
  justify-content: flex-start;
  align-items: center;
`;
