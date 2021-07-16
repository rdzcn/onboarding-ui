import styled, { css } from "styled-components";

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "ref" | "xmlns"> & {
  width?: string;
  height?: string;
  $color?: string;
};

const iconSize = ({ width, height }: IconProps) => ({
  width: width || "1em",
  height: height || width || "1em",
});

export const Svg = styled.svg.attrs(iconSize)<IconProps>(
  ({ width, height, $color = "inherit" }) => css`
    width: ${width};
    height: ${height};
    color: ${$color};
  `,
);
