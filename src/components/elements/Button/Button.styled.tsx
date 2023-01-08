import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  border: none;
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0px 6px 6px ${({ theme }) => theme.colors?.primary?.default} 10;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 16px;
  width: fit-content;

  &.primary {
    background-color: ${({ theme }) => theme.colors?.primary?.default};
    color: white;

    &:hover {
    background-color: ${({ theme }) => theme.colors?.primary?.hard};
    }
    &:disabled {
    background-color: ${({ theme }) => theme.colors?.text?.medium};
      cursor: not-allowed;
    }
  }

  &.secondary {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors?.primary?.default};
    color: ${({ theme }) => theme.colors?.primary?.default};

    &:hover {
      background-color: ${({ theme }) => theme.colors?.primary?.ultrasoft};
    }
    &:disabled {
      background-color: white;
      border: 1px solid ${({ theme }) => theme.colors?.text?.medium};
      color: ${({ theme }) => theme.colors?.text?.medium};
      cursor: not-allowed;
    }
  }

  &.tertiary {
    background-color: ${({ theme }) => theme.colors?.primary?.ultrasoft};
    color: ${({ theme }) => theme.colors?.primary?.default};
    box-shadow: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors?.primary?.ultrasoft};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors?.primary?.ultrasoft};
      color: ${({ theme }) => theme.colors?.text?.medium};
      cursor: not-allowed;
    }
  }

  &.text {
    background-color: transparent;
    color: ${({ theme }) => theme.colors?.primary?.default};
    box-shadow: none;
    padding: 0;

    &:hover {
    color: ${({ theme }) => theme.colors?.primary?.hard};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors?.text?.medium};
      cursor: not-allowed;
    }
  }
  transition: 0.2s ease all;
`;

export const IconWrapper = styled.div`
  display: flex;
`