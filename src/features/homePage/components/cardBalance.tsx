"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Dispatch, useState } from "react";
import { IoQrCodeSharp } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";

export default function CardBalance() {
  const [stateQrCode, setStateQrCode] = useState(true);

  return (
    <div className="flex justify-center mt-2">
      <Card className="w-full h-56 ">
        {stateQrCode ? (
          <CardContent onClick={() => setStateQrCode(false)} className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-col">
                <span>Programa Fidelidade</span>
                <strong>BARBERSHOP</strong>
              </div>
              <div className="flex gap-2">
                <FaCoins />
                <span>1000</span>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div className="flex flex-col">
                <strong className="text-xl">Carlos Rosa</strong>
              </div>
              <div className="flex gap-2">
                <IoQrCodeSharp
                  
                  size={80}
                />
              </div>
            </div>
          </CardContent>
        ) : (
          <CardContent onClick={() => setStateQrCode(true)} className="flex p-1 items-center gap-2 h-full">
            <QRCodeCanvas
              size={180}
              
              value="654521-655521-1998721"
            />
            <div className="flex h-full py-4 flex-col justify-between items-start p-2">
              <div className="flex flex-col">
                <strong className="font-bold text-xl">Carlos Rosa</strong>
                <div className="flex gap-2 items-center">
                  <FaCoins />
                  <span className="font-semibold text-lg">1.980</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Programa Fidelidade</span>
                <strong>BARBERSHOP</strong>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export const CardQrdCode = ({ handle }: { handle: Dispatch<boolean> }) => {
  return (
    <div onClick={() => handle(true)}>
      <QRCodeCanvas value="654521-655521-1998721" />
    </div>
  );
};
