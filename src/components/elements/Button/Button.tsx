import React from "react";
import * as El from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <El.Button {...props} className={`Button-root ${props.variant} ${props.className}`}>
      {props.startIcon && <El.IconWrapper>{props.startIcon}</El.IconWrapper>}
      {props.label}
      {props.endIcon && <El.IconWrapper>{props.endIcon}</El.IconWrapper>}
    </El.Button>
  );
};

Button.defaultProps = {
  disabled: false,
  label: "Button",
  variant: "primary",
  className: "",
  type: "button",
  id: ""
};

export default Button;
