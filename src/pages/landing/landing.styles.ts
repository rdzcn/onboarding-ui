import styled from "styled-components";
import { StyledText } from "../../contexts/text.context";
import mediaSizes from "../../assets/styles/mediaTypes";

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: ${mediaSizes.desktop}em) {
    width: 960px;
  }
`;

export const Header = styled(StyledText)`
  font-size: 36px;
  line-height: 1.5;
  margin-bottom: 96px;
  font-weight: bold;
  text-align: center;
`;
