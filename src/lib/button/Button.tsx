import React, { FC } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  ButtonTypes,
  ButtonInnerWrapper,
  ButtonTextContainer,
  Header,
} from "./button.styles";

export type PrimitiveButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps {
  buttonType?: ButtonTypes;
  to?: string;
  href?: string;
  component?: any;
  ref?: any;
  onClick?:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.MouseEventHandler<HTMLAnchorElement>;
}

const Button: FC<ButtonProps & PrimitiveButtonProps> = (props) => {
  const { buttonType, children, component = "button", href, ...rest } = props;

  const styledAs = href && component === "button" ? "a" : component;

  const ButtonElement =
    buttonType === "secondary" ? SecondaryButton : PrimaryButton;

  return (
    <ButtonElement as={styledAs} href={href} {...rest}>
      <ButtonInnerWrapper>
        <ButtonTextContainer>
          <Header>{children}</Header>
        </ButtonTextContainer>
      </ButtonInnerWrapper>
    </ButtonElement>
  );
};

export default Button;
