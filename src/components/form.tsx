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

  const { control, handleSubmit } = useForm<TransactionsItemWithoutType>({
    defaultValues: {
      value: 0,
      description: "",
    },
  });

  const { newTransaction } = useTransactionStore();

  const onSubmit = (data: TransactionsItemWithoutType) => {
    const newData = { ...data, type: selectTransactionType };

    newTransaction(newData);
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
              value={value.toString()}
              placeholder="Digite um valor..."
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="value"
          defaultValue={0}
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
              placeholder="Digite uma descrição..."
              onChangeText={(value) => onChange(value)}
            />
          )}
          name="description"
          defaultValue=""
        />
      </View>

      <View className="w-full gap-10 my-5 flex-row justify-around">
        <Button
          className={
            selectTransactionType === "ENTRANCE" ? "bg-primary" : "border"
          }
          onPress={() => setSelectTransactionType("ENTRANCE")}
        >
          <Button.item text="Entrada" className="text-white" />
        </Button>

        <Button
          className={selectTransactionType === "EXIT" ? "bg-primary" : "border"}
          onPress={() => setSelectTransactionType("EXIT")}
        >
          <Button.item text="Saída" />
        </Button>
      </View>

      <Button onPress={handleSubmit(onSubmit)} className="bg-variant02">
        <Button.item text="ADICIONAR" className="text-white" />
      </Button>
    </View>
  );
}
