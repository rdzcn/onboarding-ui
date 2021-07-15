const onboardingTheme = {
  borderRadius: {
    normal: "6px",
    small: "3px",
  },
  colors: {
    grey: {
      100: "#2c3331",
      85: "#4c5250",
      70: "#4e4e4e",
      40: "#abadad",
      25: "#cacccb",
      8: "#eeefef",
      2: "#fbfbfb",
      0: "#fff",
    },
    success: {
      100: "#49b85c",
      15: "#e3f4e6",
      5: "#f6fbf7",
    },
    blue: {
      100: "#5092d4",
      85: "#4883be",
      70: "#85b3e1",
      15: "#e4eef8",
      5: "#f6fafd",
    },
    warn: {
      100: "#fabc37",
      15: "#fef5e1",
      5: "#fffcf5",
    },
    error: {
      100: "#db5039",
      15: "#f9e4e1",
      5: "#fdf6f5",
    },
  },
  shadows: {
    outset: {
      first: "0 0 2rem rgba(204, 204, 204, 0.5)",
      firstHover: "0 0.5rem 2rem rgba(0, 0, 0, 0.2)",
      second: "0 1rem 4rem rgba(0, 0, 0, 0.2)",
    },
    inset: {
      activeLight: "inset 0 0 1rem 0.5rem rgba(44, 51, 49, 0.2)",
      activeDark: "inset 0 0 1rem 0.5rem rgba(44, 51, 49, 0.7)",
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.4, 0.0, 1, 1)",
      easeIn: "cubic-bezier(0.0, 0.0, 0.2, 1)",
    },

    duration: {
      shortest: 100,
      shorter: 200,
      short: 250,
      standard: 300,
      large: 350,
    },
  },
  typography: {
    fontFamily: "roboto",
    fallbackFont: "Arial",
    fontWeights: {
      regular: 400,
      medium: 500,
    },
    lineHeights: {
      small: 1.25,
      medium: 1.33,
      large: 1.5,
    },
    fontSizes: {
      h1: "32px",
      h2: "26px",
      h3: "20px",
      h4: "18px",
      text: "16px",
      small: "14px",
      label: "12px",
    },
  },
};

export default onboardingTheme;
