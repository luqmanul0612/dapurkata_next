import React from "react";

export interface ButtonProps {
  id?: string;
  variant?: "primary" | "secondary" | "tertiary" | "text";
  type: "button" | "submit"
  className?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}
