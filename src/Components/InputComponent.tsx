import { ChangeEventHandler, FC } from "react";

type InputProps = {
    onChange: (value: string) => void;
    item: string
};

const Input: FC<InputProps> = ({ onChange, item }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return <input onChange={handleChange} value={item} />;
};

export default Input;
