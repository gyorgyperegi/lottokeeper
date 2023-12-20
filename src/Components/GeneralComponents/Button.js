import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: ${props => props.width ?? "150px"};
  min-height: ${props => props.height ?? "50px"};
  color: ${props => props.color ?? "var(--dark)"};
  background: ${props => props.background ??"var(--champagne)"};
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  border: ${props => props.border ?? "none"};
  margin: ${props => props.margin ?? ""};
  opacity: ${props => props.disabled ? "0.4" : ""};
  cursor: ${props => props.disabled ? "" : "pointer"};
`;
export const Button = ({width, height, color, background, text, clickHandler, border, margin, isDisabled}) => {

  return(
    <ButtonWrapper
      width={width}
      height={height}
      color={color}
      background={background}
      onClick={clickHandler}
      border={border}
      margin={margin}
      disabled={isDisabled}
    >
      {text}
    </ButtonWrapper>
  )
};