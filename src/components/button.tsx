import { ComponentProps, ReactNode, createContext, useContext } from "react";
import {
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";

interface IButtonProps extends TextInputProps {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

interface IButtonItemProps {
  text: string;
  className?: string;
}

function Button({ disabled, className, children }: IButtonProps) {
  return (
    <TouchableOpacity
      className={`px-12 items-center py-3 rounded-lg ${className}`}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonItem({ text, className }: IButtonItemProps) {
  return <Text className={`text-xl font-bold  ${className}`}>{text}</Text>;
}

Button.item = ButtonItem;

export { Button };
