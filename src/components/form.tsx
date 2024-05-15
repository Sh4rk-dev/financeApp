import {
  TransactionType,
  TransactionsItem,
  useTransactionStore,
} from "@/store/transactions-store";
import { View } from "react-native";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type TransactionsItemWithoutType = Omit<TransactionsItem, "type">;

export function Form() {
  const [selectTransactionType, setSelectTransactionType] =
    useState<TransactionType>("ENTRANCE");

  const { control, handleSubmit, reset } = useForm<TransactionsItemWithoutType>(
    {
      defaultValues: {
        description: "",
      },
    }
  );

  const { newTransaction } = useTransactionStore();

  const onSubmit = (data: TransactionsItemWithoutType) => {
    const newData = { ...data, type: selectTransactionType };

    newTransaction(newData);
    reset();
  };

  return (
    <View className="mt-10">
      <View className="mb-3">
        <Label label={{ text: "Valor" }} className="text-xl font-bold" />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              type="number-pad"
              value={value?.toString()}
              placeholder="Digite um valor..."
              onChangeText={onChange}
            />
          )}
          name="value"
        />
      </View>

      <View className="mb-3">
        <Label label={{ text: "Descrição" }} className="text-xl font-bold" />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              type="default"
              value={value}
              placeholder="Digite uma descrição..."
              onChangeText={onChange}
            />
          )}
          name="description"
        />
      </View>

      <View className="w-full gap-10 my-5 flex-row justify-around">
        <Button
          className={
            selectTransactionType === "ENTRANCE" ? "bg-primary" : "border"
          }
          onPress={() => setSelectTransactionType("ENTRANCE")}
        >
          <Button.item
            text="Entrada"
            className={
              selectTransactionType === "EXIT" ? "text-black" : "text-white"
            }
          />
        </Button>

        <Button
          className={selectTransactionType === "EXIT" ? "bg-primary" : "border"}
          onPress={() => setSelectTransactionType("EXIT")}
        >
          <Button.item
            text="Saída"
            className={
              selectTransactionType === "EXIT" ? "text-white" : "text-black"
            }
          />
        </Button>
      </View>

      <Button onPress={handleSubmit(onSubmit)} className="bg-variant02">
        <Button.item text="ADICIONAR" className="text-white" />
      </Button>
    </View>
  );
}
