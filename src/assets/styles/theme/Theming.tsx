import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global.styles";
import onboardingTheme from "./onboardingTheme";

const Theming: FC = ({ children }) => (
  <ThemeProvider theme={onboardingTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theming;
