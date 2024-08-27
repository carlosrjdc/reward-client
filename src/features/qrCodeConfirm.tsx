"use client";
import { HeaderMenu } from "@/components/personizado/header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { RocketIcon } from "@radix-ui/react-icons";
import { QRCodeCanvas } from "qrcode.react";
import Reward from "./homePage/components/reward";

export default function QrCodeConfirm() {
  return (
    <div>
      <HeaderMenu />
      <div className="w-full justify-center items-center flex flex-col gap-2 max-w-xl mx-auto px-4">
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
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
