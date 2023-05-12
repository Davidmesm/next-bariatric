import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/24/solid';

export interface IRootHeaderProps {
    openNav: boolean
    setOpenNav: Dispatch<SetStateAction<boolean>>
}

export default function RootHeader (props: IRootHeaderProps) {
    const {openNav, setOpenNav} = props

    const handleOnNavButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpenNav(!openNav)
    } 

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Image
            src="/BariatricLogo.png"
            alt="Logo"
            width={30}
            height={30}
            style={{ width: "100%", height: "auto" }}
          />
          <h1 className="text-xl font-bold whitespace-nowrap">Bariatric</h1>
        </div>
        <button className="md:hidden" onClick={handleOnNavButtonClick}>
          <Bars3Icon className="h-6 w-6"/>
        </button>
      </header>
  );
}
