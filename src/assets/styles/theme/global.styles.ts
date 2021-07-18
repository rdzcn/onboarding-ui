import { createGlobalStyle } from "styled-components";
import onboardingTheme from "./onboardingTheme";

type OnboardingTheme = typeof onboardingTheme;

/* eslint-disable max-len */
export default createGlobalStyle<{ theme: OnboardingTheme }>`
  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    color: ${({ theme }) => theme.colors.grey[100]};
  }

  body, html {
    height: 100%;
    scroll-behavior: smooth;
  }

  div, input, form, header, button, textarea {
    box-sizing: border-box;
    background: transparent;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    color: ${({ theme }) => theme.colors.grey[100]};
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
  }

  input, textarea, select {
    font-family: Roboto, sans-serif;
  }

  #root {
    height: 100%;
  }

  /* remove the arrows from number inputs*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* stylelint-disable-next-line */
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    /* stylelint-disable-next-line */
    -moz-appearance: textfield;
  }
`;
