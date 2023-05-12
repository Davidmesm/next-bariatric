'use client'
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { RootMenuItemType } from "../data/rootMenuData";

export interface RootLinkWithChildren {
  menuItem: RootMenuItemType;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
  url: string;
}

export default function RootLinkWithChildren(props: RootLinkWithChildren) {
  const { menuItem, setOpenNav, url } = props;

  const [openChildren, setOpenChildren] = useState(false);

  const hidden = !openChildren ? "hidden" : "";

  return (
    <li>
      <button type="button" className="flex px-3 py-2 items-center hover:bg-gray-500 hover:text-white w-full" onClick={() => setOpenChildren(!openChildren)}>
        {menuItem.icon && <span className="mx-2">{menuItem.icon}</span>}
        <span className="mx-4">{menuItem.label}</span>
        <span className="ml-auto">
          <ChevronRightIcon className="h-6 w-6" />
        </span>
      </button>
      <ul className={"ml-16 border-l-gray-300 border-l-2 mt-2 border-l-solid " + hidden}>
        {menuItem.children &&
          menuItem.children.map((subItem) => {
            const isSelectedClassNames = url.startsWith(subItem.to) ? " bg-gray-500 text-white" : "";
            
            return (
            <li
              key={subItem.key}
              className={"pl-2 py-2 hover:bg-gray-500 hover:text-white" + isSelectedClassNames}
            >
              <Link href={subItem.to} onClick={() => setOpenNav(false)}>
                {subItem.label}
              </Link>
            </li>
          )})}
      </ul>
    </li>
  );
}
