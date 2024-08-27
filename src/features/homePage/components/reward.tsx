import { Avatar } from "@/components/ui/avatar";
import { FaCoins } from "react-icons/fa";

export default function Reward() {
  return (
    <div className="flex justify-between items-center px-2 py-4 border rounded-lg">
      <div className="flex gap-2 items-center">
        <Avatar>
          <img
            src="https://www.ringmybarber.com/wp-content/uploads/2022/10/qualities-of-a-highly-professional-barber.jpg"
            alt=""
          />
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <strong>Corte de Cabelo</strong>
          <span>Barbearia do Zé</span>
        </div>
      </div>
      <div className="flex gap-2">
        <strong>800</strong>
        <FaCoins />
      </div>
    </div>
  );
}
