import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { RootMenuItemType } from "../data/rootMenuData";

export interface IRootLinkProps {
    menuItem: RootMenuItemType;
    setOpenNav: Dispatch<SetStateAction<boolean>>;
    url: string;
}

export default function RootLink({menuItem, setOpenNav, url}: IRootLinkProps) {
  let isSelectedClassNames = "";

  if(menuItem.to !== '/') {
    isSelectedClassNames = url.startsWith(menuItem.to) ? " bg-gray-500 text-white" : "";
  } else {
    isSelectedClassNames = url === menuItem.to ? " bg-gray-500 text-white" : "";
  }
   

  return (
    <li
      key={menuItem.key}
      className={"px-3 py-2 hover:bg-gray-500 hover:text-white" + isSelectedClassNames}
    >
      <Link
        href={menuItem.to}
        className="flex items-center"
        onClick={() => setOpenNav(false)}
      >
        {menuItem.icon && <span className="mx-2">{menuItem.icon}</span>}
        <span className="mx-4">{menuItem.label}</span>
      </Link>
    </li>
  );
}
