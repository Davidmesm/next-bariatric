import { Dispatch, SetStateAction } from "react";
import { rootMenuData } from "../data/rootMenuData";
import RootLinkWithChildren from "./RootLinkWithChildren";
import RootLink from "./RootLink";
import { usePathname, useRouter } from "next/navigation";
import { PowerIcon } from "@heroicons/react/24/solid";
import { signOut } from "@/features/auth/services/authServices";

export interface IRootNavProps {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

export default function RootNav(props: IRootNavProps) {
  const { openNav, setOpenNav } = props;

  const hidden = !openNav ? "hidden" : "";

  const pathname = usePathname();
  const router = useRouter();

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
    <div
      className={
        "sm:block bg-gray-200 text-gray-800 h-full w-full sm:w-80 " + hidden
      }
      style={{ height: "calc(100vh - 50px)", overflowY: "auto" }}
    >
      <nav className="mt-5">
        <ul className="text-base font-semibold">
          {rootMenuData.map((menuItem) => {
            if (menuItem.children) {
              return (
                <RootLinkWithChildren
                  key={menuItem.key}
                  menuItem={menuItem}
                  setOpenNav={setOpenNav}
                  url={pathname}
                />
              );
            } else {
              return (
                <RootLink
                  key={menuItem.key}
                  menuItem={menuItem}
                  setOpenNav={setOpenNav}
                  url={pathname}
                />
              );
            }
          })}
          <li className="px-3 py-2 hover:bg-gray-500 hover:text-white sm:hidden">
            <button type="button" className="flex items-center" onClick={handleSignOut}>
              <span className="mx-2">
                <PowerIcon className="h-6 w-6" />
              </span>
              <span className="mx-4">Salir</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
