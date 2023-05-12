'use client'

import { ReactNode, useState } from "react";
import { RootHeader, RootNav } from "@/features/root/components";

export interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  const { children } = props;

  const [openNav, setOpenNav] = useState(false);

  const hiddenContent = openNav ? "hidden" : "";

  return (
    <div className="flex flex-col h-screen">
      <RootHeader openNav={openNav} setOpenNav={setOpenNav} />
      <div className="flex-1 flex">
        <RootNav openNav={openNav} setOpenNav={setOpenNav} />
        <div className={"flex-1 sm:block " + hiddenContent}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
