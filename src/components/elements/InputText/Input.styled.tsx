import styled, { css } from "styled-components";

type TMain = {
  width?: string;
  isFocus: boolean;
  isFilled: boolean;
  disabled: boolean;
}

export const Main = styled.div<TMain>`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily};
  width: ${({ width }) => width};
  > div.Input-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    > label {
      position: absolute;
      background: #ffffff;
      padding: 0 3px;
      height: fit-content;
      top: calc(50% - 7px);
      left: 10px;
      color: ${({ theme }) => theme.colors?.text?.darkGrey};
      margin: 0;
      margin-left: 8px;
      line-height: 1;
      font-weight: 500;
      font-size: 14px;
      transition: 0.2s all ease;
    }
  }
  
  ${({ isFocus }) => isFocus ? css`
    > div.Input-wrapper {
      > label {
        top: -7px;
        font-size: 12px;
      }
    }
  ` : css`
    > div.Input-wrapper {
        > label {
          cursor: text;
        }
      }
  `}
  ${({ isFilled }) => isFilled && css`
    > div.Input-wrapper {
      > label {
        top: -7px;
        font-size: 12px;
      }
    }
  `}
  ${({ disabled, isFilled }) => disabled && css`
    > div.Input-wrapper {
      > label {
        color: ${({ theme }) => theme.colors?.text?.medium};
        background: ${({ theme }) => theme.colors?.gray?.["02"]};
        ${isFilled && css`
            background: linear-gradient(to bottom, transparent 50%, ${({ theme }) => theme.colors?.gray?.["02"]} 50%);
        `}
      }
    }
  `}
  transition: .2s all ease;
`;

export const InputText = styled.input`
  border: 1.5px solid ${({ theme }) => theme.colors?.primary?.default};
  outline: none;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  padding: 0 40px 0 23px;
  width: calc(100%-54px);
  height: 46px;
  caret-color: ${({ theme }) => theme.colors?.primary?.default};
  ::placeholder { 
    color: transparent;
  }
  :-ms-input-placeholder {
    color: transparent;
  }
  ::-ms-input-placeholder {
    color: transparent;
  }
  :focus {
    ::placeholder { 
      color: ${({ theme }) => theme.colors?.text?.medium};
    }
    :-ms-input-placeholder {
      color: ${({ theme }) => theme.colors?.text?.medium};
    }
    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors?.text?.medium};
    }
  }
  :disabled {
    background: ${({ theme }) => theme.colors?.gray?.["02"]};
    color: ${({ theme }) => theme.colors?.text?.medium};
    border: 1.5px solid ${({ theme }) => theme.colors?.gray?.["06"]};
  }
  transition: .2s all ease;
`

type THelperText = {
  error?: boolean;
}
export const HelperText = styled.div<THelperText>`
  display: flex;
  gap: 5px;
  align-items: center;
  line-height: 1;
  padding: 0 2px;
  padding-top: 5px;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors?.text?.darkGrey};;
  ${({ error }) => error && css`
    color: ${({ theme }) => theme.colors?.stateColor?.red?.medium};
  `}
  transition: all ease 0.2s;
`;

type TCloseIcon = {
  show: boolean;
  disabled: boolean;
}

export const CloseIcon = styled.div<TCloseIcon>`
  display: flex;
  position: absolute;
  cursor: default;
  right: 15px;
  opacity: 0;
  overflow: hidden;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background: ${({ theme }) => theme.colors?.primary?.ultrasoft};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px 1px rgba(175, 173, 200, 0.2);
  border-radius: 100px;
  width: 22px;
  height: 22px;
  :hover {
    background: ${({ theme }) => theme.colors?.primary?.Soft};
  }
  ${({ show, disabled }) => show && !disabled && css`
    opacity: 1;
    cursor: pointer;
  `}
  transition: .2s all ease;
`
