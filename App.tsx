import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { Form } from "@/components/form";
import { Label } from "@/components/label";
import { Separator } from "@/components/separator";
import { Values } from "@/components/values";
import { Header } from "./src/components/header";
import {
  TransactionType,
  useTransactionStore,
} from "@/store/transactions-store";

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

  console.log(getTransactionValues("ENTRANCE"), "ENTRADA");
  console.log(getTransactionValues("EXIT"), "sAIDA");

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

        <TouchableOpacity onPress={clear}>
          <Text>Limpar tudo</Text>
        </TouchableOpacity>

        <Separator />

        <Form />

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.value}</Text>
                <Text>{item.description}</Text>

                <TouchableOpacity onPress={() => removeTransaction(item.id)}>
                  <Text>Remover Item</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}
