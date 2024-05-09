import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { View } from "react-native";

import { Label } from "@/components/label";
import { Header } from "./src/components/header";

export default function App() {
  return (
    <View className="flex-1 px-10">
      <StatusBar style="auto" />

      <Header />
      <View className="">
        <Label
          label="Entrada"
          rightIcon={{ name: "arrow-up-circle-outline" }}
        />            
      </View>
    </View>
  );
}
