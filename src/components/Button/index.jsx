import { ButtonContainer } from "./styles";

const Button = (props) => {
  return (
    <ButtonContainer onClick={props.onClickButton}>
      {props.type}
    </ButtonContainer>
  );
};

export default Button;
