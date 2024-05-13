import { create } from "zustand";
import {
  addTransaction,
  removeTransaction
} from "@/store/helpers/transactions-in-memory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

export type TransactionType = "EXIT" | "ENTRANCE";

export type TransactionsItem = {
  type: TransactionType;
  value: number;
  description: string;
};

export type TransactionsItemWithId = TransactionsItem & {
  id: string;
};

interface TransactionStore {
  transactions: TransactionsItemWithId[];

  clear: () => void;
  newTransaction: (transaction: TransactionsItem) => void;
  removeTransaction: (transactionId: string) => void;
  // update: (value: FormStoreItemProps) => void;
}

export const useTransactionStore = create(
  persist<TransactionStore>(
    (set) => ({
      transactions: [],

      newTransaction: (transaction) =>
        set((state) => ({
          transactions: addTransaction(state.transactions, transaction)
        })),
      removeTransaction: (transactionId) =>
        set((state) => ({
          transactions: removeTransaction(state.transactions, transactionId)
        })),
      clear: () => set(() => ({ transactions: [] }))
    }),
    {
      name: "Transactions",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
