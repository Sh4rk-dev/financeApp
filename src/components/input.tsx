import { KeyboardTypeOptions, TextInput, TextInputProps } from "react-native";

interface IInputProps extends TextInputProps {
  placeholder: string;
  type: KeyboardTypeOptions;
}

export function Input({ placeholder, type, ...rest }: IInputProps) {
  return (
    <TextInput
      keyboardType={type}
      className=" w-full py-2 px-5 border rounded-lg text-xl"
      placeholder={placeholder}
      {...rest}
    />
  );
}
