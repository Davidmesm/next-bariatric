import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Bars3Icon, PowerIcon } from "@heroicons/react/24/solid";
import { signOut } from "@/features/auth/services/authServices";

export interface IRootHeaderProps {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

export default function RootHeader(props: IRootHeaderProps) {
  const { openNav, setOpenNav } = props;

  const handleOnNavButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setOpenNav(!openNav);
  };

  const handleSignOut = async(
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try
    {
      await signOut()
    } catch(error) {
      console.warn(error)
    }
  }

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Image
          src="/BariatricLogo.png"
          alt="Logo"
          width={20}
          height={20}
          className="mr-4"
        />
        <h1 className="text-xl font-bold whitespace-nowrap">Bariatric</h1>
      </div>
      <button
        type="button"
        className="md:hidden"
        onClick={handleOnNavButtonClick}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="group hidden sm:block relative"
        onClick={handleSignOut}
      >
        <span className="group-hover:opacity-100 opacity-0 tooltip-text absolute -left-14 rounded-full bg-gray-400 text-white py-1 px-3 pointer-events-none">
          Salir
        </span>
        <PowerIcon className="h-6 w-6" />
      </button>
    </header>
  );
}
