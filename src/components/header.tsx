import { Text, View } from "react-native";

export function Header() {
  return (
    <View className="mt-10 p-8 justify-center items-center">
      <Text className="font-semibold text-primary text-3xl fixed">
        Controle Financeiro
      </Text>
    </View>
  );
}
