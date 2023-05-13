"use client";

import { ReactNode, useEffect, useState } from "react";
import { RootHeader, RootNav } from "@/features/root/components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import "@/config/firebase.config";
import { LoadingOverlay } from "@/components";

export interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
  const { children } = props;

  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true);

  const hiddenContent = openNav ? "hidden" : "";

  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const authObs = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("login:" + user.email);
      } else {
        router.push("/login");
      }
    });

    setLoading(false)

    return authObs;
  }, [auth, router]);

  return (
    <LoadingOverlay loading={loading}>
      <div className="flex flex-col h-screen">
        <RootHeader openNav={openNav} setOpenNav={setOpenNav} />
        <div className="flex-1 flex">
          <RootNav openNav={openNav} setOpenNav={setOpenNav} />
          <div className={"flex-1 sm:block " + hiddenContent}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}
