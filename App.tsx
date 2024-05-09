import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

import { Header } from "./src/components/header";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      <Header />
    </View>
  );
}
