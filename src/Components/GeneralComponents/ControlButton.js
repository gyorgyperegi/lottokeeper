import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 30px;
  min-height: 25px;
  color: var(--champagne);
  border-radius: 8px;
  font-weight: 700;
  font-size: 20px;
  border: 1px solid var(--champagne);
  margin: ${props => props.margin ?? ""};
  opacity: ${props => props.disabled ? "0.4" : ""};
  cursor: ${props => props.disabled ? "" : "pointer"};
  background: black;
`;
export const ControlButton = ({width, height, color, text, clickHandler, margin, isDisabled}) => {

  return(
    <ButtonWrapper
      width={width}
      height={height}
      color={color}
      onClick={clickHandler}
      margin={margin}
      disabled={isDisabled}
    >
      {text}
    </ButtonWrapper>
  )
};