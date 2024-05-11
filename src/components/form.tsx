import { View } from "react-native";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";

function handleGetValues() {
  return console.log();
}

export function Form() {
  return (
    <View className="mt-10">
      <View className="mb-3">
        <Label label={{ text: "Valor" }} className="text-xl font-bold" />
        <Input type="number-pad" placeholder="Digite um valor..." />
      </View>
      <View className="mb-3">
        <Label label={{ text: "Descrição" }} className="text-xl font-bold" />
        <Input type="default" placeholder="Digite um valor..." />
      </View>

      <View className="w-full gap-10 my-5 flex-row justify-around">
        <Button className="bg-primary border">
          <Button.item text="Entrada" className="text-white" />
        </Button>
        <Button className="border">
          <Button.item text="Saída" />
        </Button>
      </View>

      <Button onPress={() => console.log("Adicionou")
      } className="bg-variant02">
        <Button.item text="ADICIONAR" className="text-white" />
      </Button>
    </View>
  );
}
