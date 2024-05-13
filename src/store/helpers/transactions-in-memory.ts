import {
  TransactionsItemWithId,
  TransactionsItem
} from "@/store/transactions-store";
import { randomUUID } from "expo-crypto";
import { Alert } from "react-native";

export function addTransaction(
  transactions: TransactionsItemWithId[],
  newTransaction: TransactionsItem
) {
  const newTransactionWithId = {
    id: randomUUID(),
    ...newTransaction
  };

  Alert.alert("Adicionado com sucesso");

  return [...transactions, newTransactionWithId];
}

export function removeTransaction(
  transactions: TransactionsItemWithId[],
  transactionId: string
) {
  const updatedTransactions = transactions.filter(
    (item) => item.id !== transactionId
  );

  return updatedTransactions;
}
