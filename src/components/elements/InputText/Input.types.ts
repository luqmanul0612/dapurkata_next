import React from "react";

export type InputProps =
  {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    width?: string;
    id?: string;
    autoComplete?: string
  }

export type TInputText = {
  type: "text" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
