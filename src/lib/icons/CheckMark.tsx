import React from "react";
import { IconProps, Svg } from "./icon.styles";

const CheckMark = (props: IconProps) => (
  <Svg viewBox="0 0 14 10" {...props}>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
      d="M1.158 3.726a.68.68 0 0 0-.942-.039.634.634 0 0 0-.04.914L4.336 9l7.488-7.915a.634.634 0 0 0-.04-.915.68.68 0 0 0-.942.04L4.337 7.085l-3.18-3.36z"
      transform="translate(1 1)"
    />
  </Svg>
);

export default CheckMark;
