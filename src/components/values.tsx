import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "nativewind";
import { Text, View } from "react-native";

interface IValuesProps {
  values: number;
}

export function Values({ values }: IValuesProps) {
  return (
    <LinearGradient style={styles.container} colors={["#2b93b4", "#56aaa6"]}>
      <View className="w-full h-[70px] px-5 justify-between items-center rounded-xl flex-row">
        <Text className=" text-5xl justify-between gap-20 text-white">R$</Text>
        <Text className="text-5xl justify-between gap-20 text-white">{values}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
