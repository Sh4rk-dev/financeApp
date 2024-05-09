import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentProps } from "react";
import { Text, View } from "react-native";

interface LabelProps {
  label: string;
  rightIcon?: {
    name?: ComponentProps<typeof Ionicons>["name"];
    color?: string;
    size?: number;
  };
}

export function Label({ label, rightIcon }: LabelProps) {
  return (
    <View className="pl-4 items-center gap-2 flex-row">
      <Text className="text-3xl">{label}</Text>
      <Ionicons {...rightIcon} size={24} />
    </View>
  );
}
