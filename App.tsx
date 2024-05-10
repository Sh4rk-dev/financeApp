import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { View } from "react-native";

import { Label } from "@/components/label";
import { Values } from "@/components/values";
import { Header } from "./src/components/header";
import { Separator } from "@/components/separator";

export default function App() {
  return (
    <View className="flex-1 px-10">
      <StatusBar style="auto" />

      <Header />

      <View className="gap-4 mb-6 ">
        <Label
          label="Entrada"
          rightIcon={{ name: "arrow-up-circle-outline" }}
        />
        <Values values={120} />
      </View>
      <View className="gap-4 mb-6">
        <Label
          label="Saída"
          rightIcon={{ name: "arrow-down-circle-outline" }}
        />
        <Values values={120} />
      </View>
      <View className="gap-4 mb-6">
        <Label label="Total" rightIcon={{ name: "wallet-outline" }} />
        <Values values={120} />
      </View>

      <Separator/>
    </View>
  );
}
