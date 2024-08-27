"use client";
import { HeaderMenu } from "@/components/personizado/header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { RocketIcon } from "@radix-ui/react-icons";
import { QRCodeCanvas } from "qrcode.react";
import Reward from "./homePage/components/reward";

export default function QrCodeConfirm() {
  return (
    <div>
      <HeaderMenu />
      <div className="w-full justify-center items-center flex flex-col gap-2 max-w-xl mx-auto px-4">
        <Alert className="my-2 bg-blue-100">
          <BsExclamationOctagonFill size={25} className="fill-blue-500" />
          <AlertTitle className="text-blue-800 ml-1">Mostre este código QR a um funcionário!</AlertTitle>
          <AlertDescription className="ml-1 text-blue-800">
          Você tem 69.820 pontos. Após recuperar esta recompensa, você terá 67.320 pontos restantes.
          </AlertDescription>
        </Alert>
        <QRCodeCanvas size={350} value="carlos roberto rosa da Silva" />
        <div className=" mt-4 w-full">
          <Reward />
        </div>
      </div>
    </div>
  );
}
