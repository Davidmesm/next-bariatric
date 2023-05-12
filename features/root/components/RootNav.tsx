import { Dispatch, SetStateAction } from "react";
import { rootMenuData } from "../data/rootMenuData";
import RootLinkWithChildren from './RootLinkWithChildren';
import RootLink from "./RootLink";
import { usePathname } from "next/navigation";

export interface IRootNavProps {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

export default function RootNav(props: IRootNavProps) {
  const { openNav, setOpenNav } = props;

  const hidden = !openNav ? "hidden" : "";

  const pathname = usePathname();

  return (
    <div
      className={
        "sm:block bg-gray-200 text-gray-800 h-full w-full sm:w-80 " +
        hidden
      }
      style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
    >
      <nav className="mt-5">
        <ul className="text-base font-semibold">
          {rootMenuData.map((menuItem) => {
            if(menuItem.children) { return (
              <RootLinkWithChildren key={menuItem.key} menuItem={menuItem} setOpenNav={setOpenNav} url={pathname}/>
            )} else { return (
              <RootLink key={menuItem.key} menuItem={menuItem} setOpenNav={setOpenNav} url={pathname}/>
            )}
          })}
        </ul>
      </nav>
    </div>
  );
}
