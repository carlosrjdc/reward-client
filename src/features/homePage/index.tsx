import { HeaderMenu } from "@/components/personizado/header";
import CardBalance from "./components/cardBalance";
import Reward from "./components/reward";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Home() {
  return (
    <div>
      <HeaderMenu />
      <div className="w-full flex flex-col gap-2 max-w-xl mx-auto px-4">
        <CardBalance />
        <Tabs defaultValue="reward">
          <TabsList className="w-full flex justify-between p-4">
            <TabsTrigger value="reward">Recompensa</TabsTrigger>
            <TabsTrigger value="two">Historico</TabsTrigger>
            <TabsTrigger value="three">Regras</TabsTrigger>
          </TabsList>
          <TabsContent className="mt-2 flex flex-col gap-1" value="reward">
            <Reward />
            <Reward />
            <Reward />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
