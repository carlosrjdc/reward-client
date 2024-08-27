"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import barber from "@/assets/barber.png";
import { Button } from "@/components/ui/button";
import { FaCoins } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CardRedeem() {
  const router = useRouter();
  return (
    <div>
      <Card className="h-full p-0">
        <CardContent className=" p-0 m-0 rounded-3xl items-center h-full justify-center">
          <Image className="h-full w-full" alt="" src={barber} />
          <div className="flex flex-col p-2">
            <strong className="text-xl uppercase">Corte de cabelo</strong>
            <span className="text-sm">
              Comemore o seu aniversário em grande estilo conosco. Desfrute de
              uma refeição cortesia e uma surpresa especial de nossa equipe.
              Torne o seu aniversário inesquecível em nosso estabelecimento
            </span>
            <div className="p-1">
              <span className="text-[10px] text-primary py-1 px-2 bg-secondary rounded-lg">
                Você tem 12.340 pontos
              </span>
            </div>
            <div className="flex justify-between items-center p-2">
              <div className="flex gap-2 items-center">
                <FaCoins size={30} />
                <span className="font-bold text-lg">1.980</span>
              </div>
              <Button onClick={() => router.push(`redeem/${2}`)}>Resgatar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
