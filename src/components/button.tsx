import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

interface IButtonItemProps {
  text: string;
  className?: string;
}

function Button({ disabled, className, children, ...rest }: IButtonProps) {
  return (
    <TouchableOpacity
      className={`px-12 items-center py-3 rounded-lg ${className}`}
      disabled={disabled}
      activeOpacity={0.7}
      {...rest}
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

