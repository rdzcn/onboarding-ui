import React from "react";
import { IconProps, Svg } from "./icon.styles";

const ChevronDown = (props: IconProps) => (
  <Svg fill="none" {...props}>
    <path
      fill="currentColor"
      d="m6 9.8 5.4-5.4a.8.8 0 1 0-1.1-1.1L6 7.5 1.7 3.3A.8.8 0 0 0 .6 4.4L6 9.8z"
    />
  </Svg>
);

export default ChevronDown;
