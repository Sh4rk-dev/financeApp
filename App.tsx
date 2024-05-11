import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { ScrollView, View } from "react-native";

import { Form } from "@/components/form";
import { Label } from "@/components/label";
import { Separator } from "@/components/separator";
import { Values } from "@/components/values";
import { Header } from "./src/components/header";

export default function App() {
  return (
    <ScrollView>
      <View className="flex-1 px-10">
        <StatusBar style="auto" />

        <Header />

        <View className="gap-4 mb-4 ">
          <Label
            label={{ text: "Entrada" }}
            rightIcon={{ name: "arrow-up-circle-outline" }}
          />
          <Values values={120} />
        </View>
        <View className="gap-4 mb-4">
          <Label
            label={{ text: "Saída" }}
            rightIcon={{ name: "arrow-down-circle-outline" }}
          />
          <Values values={120} />
        </View>
        <View className="gap-4 mb-4">
          <Label
            label={{ text: "Total" }}
            rightIcon={{ name: "wallet-outline" }}
          />
          <Values values={120} />
        </View>

        <Separator />

        <Form />
      </View>
    </ScrollView>
  );
}
