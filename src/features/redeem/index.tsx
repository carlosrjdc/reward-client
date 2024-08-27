import { HeaderMenu } from "@/components/personizado/header";
import CardRedeem from "./components/CardRedeem";
import Reward from "../homePage/components/reward";

export default function Redeem() {
  return (
    <div>
      <HeaderMenu />
      <div className="w-full flex flex-col gap-2 max-w-xl mx-auto px-4">
        <CardRedeem />
        <Reward />
        <Reward />
        <Reward />
      </div>
    </div>
  );
}
