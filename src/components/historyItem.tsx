import { TransactionsItem } from "@/store/transactions-store";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

interface IHistoryItemProps {
  data: TransactionsItem;
}

export function HistoryItem({ data }: IHistoryItemProps) {
  return (
    <View className=" gap-2 flex-row justify-between px-2 mt-4 mb-2">
      <Text className="flex-1 text-base font-semibold" numberOfLines={1}>
        {data.description}
      </Text>
      <Text className="flex-1">R$ {data.value}</Text>
      {data.type === "ENTRANCE" ? (
        <Ionicons name="arrow-up-circle-outline" size={20} color={"green"} />
      ) : (
        <Ionicons name="arrow-down-circle-outline" size={20} color={"red"} />
      )}
    </View>
  );
}
