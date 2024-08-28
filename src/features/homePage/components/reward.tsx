"use client";
import { Avatar } from "@/components/ui/avatar";
import { FaCoins } from "react-icons/fa";
import { useRouter } from "next/navigation";

type props = {
  name: string;
  points: number;
  content: string;
}

export default function Reward({content, name, points}:props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/redeem")}
      className="flex justify-between items-center px-2 py-4 border rounded-lg"
    >
      <div className="flex gap-2 items-center">
        <Avatar>
          <img
            src="https://www.ringmybarber.com/wp-content/uploads/2022/10/qualities-of-a-highly-professional-barber.jpg"
            alt=""
          />
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <strong>{name}</strong>
          <span>{content}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <strong>{points}</strong>
        <FaCoins />
      </div>
    </div>
  );
}
