import { HeaderMenu } from "@/components/personizado/header";
import CardRedeem from "./components/CardRedeem";
import Reward from "../homePage/components/reward";

export default function Redeem() {
  return (
    <div>
      <HeaderMenu />
      <div className="w-full flex flex-col gap-2 max-w-xl mx-auto px-4">
        <CardRedeem />
        <Reward
          content="Corte de cabelo barbearia do zé"
          name="Corte Cabelo"
          points={120}
        />
        <Reward
          content="Servico de BarbaTerapia"
          name="BarbaTerapia"
          points={230}
        />
        <Reward
          content="servico de sombracelha masculina"
          name="Sombracelha masculina"
          points={80}
        />
      </div>
    </div>
  );
}
