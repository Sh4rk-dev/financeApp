import { TransactionsItem } from "@/store/transactions-store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

interface IHistoryItemProps {
  data: TransactionsItem;
}

export function HistoryItem({ data }: IHistoryItemProps) {
  return (
    <View className="flex-row justify-between px-2 mt-4 mb-2">
      <Text className="text-base font-semibold">{data.description}</Text>
      <Text>R$ {data.value}</Text>
      {data.type === "ENTRANCE" ? (
        <Ionicons name="arrow-up-circle-outline" size={20} color={"green"} />
      ) : (
        <Ionicons name="arrow-down-circle-outline" size={20} color={"red"} />
      )}
    </View>
  );
}
