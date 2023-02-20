import { InputContainer } from "./styles";

const Input = (props) => {
  return (
    <InputContainer
      placeholder={props.inputHolder}
      name={props.inputName}
      value={props.inputValue}
      onChange={props.inputOnChange}
    />
  );
};

export default Input;
