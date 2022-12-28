import styled, { css } from "styled-components"

type TButton = {
  label: string;
  variant: "outline" | "contained";
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type: "button" | "submit"
}

const Button = (props: TButton) => {
  return (
    <Main variant={props.variant} onClick={props.onClick} type={props.type}>
      {props.label}
    </Main>
  )
}

export default Button

type TMain = {
  variant: "outline" | "contained"
}

const Main = styled.button<TMain>`
  outline: none;
  width: fit-content;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-family: "Poppins";
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  ${({ variant }) => variant === "contained" && css`
    background: #4284ef;
    color: #fff;
    :hover {
      background: #3068c1;
    }
  `}
  
  ${({ variant }) => variant === "outline" && css`
    background: #e7effb;
    color: #151a21;
    border: 1px solid #c6d2e3;
    :hover {
      border: 1px solid #3a7cd8;
    }
  `}

  transition: 0.2s all ease
`