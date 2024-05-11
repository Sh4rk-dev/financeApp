import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentProps } from "react";
import { Text, View } from "react-native";

const labelVariants = {};

interface LabelProps {
  label: {
    text: string;
  };
  className?: string;
  rightIcon?: {
    name?: ComponentProps<typeof Ionicons>["name"];
    color?: string;
    size?: number;
  };
}

export function Label({ label, className, rightIcon }: LabelProps) {
  return (
    <View className="pl-4 items-center gap-2 flex-row">
      <Text className={`text-2xl ${className}`}>{label.text}</Text>
      <Ionicons
        {...rightIcon}
        color={rightIcon?.color}
        size={rightIcon?.size ?? 22}
      />
    </View>
  );
}
