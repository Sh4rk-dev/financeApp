import "@/styles/global.css";
import Ionicons from "@expo/vector-icons/Ionicons";

import { StatusBar } from "expo-status-bar";

import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Form } from "@/components/form";
import { HistoryItem } from "@/components/historyItem";
import { Label } from "@/components/label";
import { Separator } from "@/components/separator";
import { Values } from "@/components/values";
import {
  TransactionType,
  useTransactionStore,
} from "@/store/transactions-store";
import { Header } from "./src/components/header";

export default function App() {
  const { transactions, removeTransaction, clear } = useTransactionStore();

  const getTransactionValues = (type: TransactionType) => {
    const currentTypeTransaction = transactions.filter(
      (item) => item.type === type
    );

    return Number(
      currentTypeTransaction.reduce((acc, item) => (acc += +item.value), 0)
    );
  };

  const getTotalTransaction = () => {
    return Number(
      transactions.reduce((acc, item) => {
        if (item.type === "EXIT") {
          return (acc -= +item.value);
        }

        return (acc += +item.value);
      }, 0)
    );
  };

  function handleRemoveTransaction(item: string) {
    Alert.alert(
      "Remover transação",
      "Tem certeza que deseja remover esta transação?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Excluir",
          onPress: () => {
            removeTransaction(item);
          },
        },
      ]
    );
  }

  function handleRemoveAllTransaction() {
    Alert.alert(
      "Remover todas as transações",
      "Tem certeza que deseja remover todas as transações?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Remover",
          onPress: () => {
            clear();
          },
        },
      ]
    );
  }

  return (
    <ScrollView nestedScrollEnabled>
      <View className="flex-1 px-10">
        <StatusBar style="auto" />

        <Header />

        <View className="gap-4 mb-4 ">
          <Label
            label={{ text: "Entrada" }}
            rightIcon={{ name: "arrow-up-circle-outline" }}
          />
          <Values values={getTransactionValues("ENTRANCE")} />
        </View>

        <View className="gap-4 mb-4">
          <Label
            label={{ text: "Saída" }}
            rightIcon={{ name: "arrow-down-circle-outline" }}
          />
          <Values type="EXIT" values={getTransactionValues("EXIT")} />
        </View>

        <View className="gap-4 mb-4">
          <Label
            label={{ text: "Total" }}
            rightIcon={{ name: "wallet-outline" }}
          />
          <Values values={getTotalTransaction()} />
        </View>

        <Separator />

        <Form />

        <View>
          {transactions.length === 0 ? (
            <View className="my-10 justify-center items-center">
              <Text className="text-xl text-black/50">
                Você não adicionou nenhum item!
              </Text>
            </View>
          ) : (
            <View>
              <View className="flex-row justify-between mt-14 mb-5 items-center">
                <Text className="text-3xl font-light"> Histórico</Text>
                <TouchableOpacity onPress={handleRemoveAllTransaction}>
                  <Ionicons name="trash-outline" size={22} />
                </TouchableOpacity>
              </View>

              <View className="mb-20">
                <View className="flex-row justify-between mb-2 px-2">
                  <Text className="text-base font-bold">Descrição</Text>
                  <Text className="text-base font-bold">Valor</Text>
                  <Text className="text-base font-bold">Tipo</Text>
                </View>

                <Separator />

                <FlatList
                  data={transactions}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <TouchableOpacity
                          onLongPress={() => handleRemoveTransaction(item.id)}
                        >
                          <HistoryItem data={item} />
                        </TouchableOpacity>
                        <Separator />
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
