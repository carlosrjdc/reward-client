"use client";

import { MdDarkMode } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function HeaderMenu() {
  const { setTheme, theme } = useTheme();
  const router = useRouter()
  return (
    <header className="flex justify-between sticky p-2 top-0 z-50 w-full bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
      <div className="flex items-center gap-4">
        <FaCoins onClick={()=> router.push("/")} size={40} />
        <strong className="text-primary">SISTEMA FIDELIDADE</strong>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <span onClick={()=>router.push('/login')} className="text-primary">Entrar</span>
        {theme === "dark" ? (
          <CiLight onClick={() => setTheme("light")} size={25} />
        ) : (
          <MdDarkMode onClick={() => setTheme("dark")} size={25} />
        )}
      </div>
    </header>
  );
}
