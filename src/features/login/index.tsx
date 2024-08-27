import { HeaderMenu } from "@/components/personizado/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginWhatsapp() {
  return (
    <div className="">
      <HeaderMenu />
      <div className="w-full mt-32 justify-center flex flex-col gap-2 max-w-xl mx-auto px-4">
        <Label>WhatsApp</Label>
        <Input placeholder="Digite seu número de WhatsApp" />
        <Button>Entrar</Button>
      </div>
    </div>
  );
}
