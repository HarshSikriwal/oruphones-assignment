"use client";

import { Outfit } from "next/font/google";
import { usePathname } from "next/navigation";
import path from "path";
import { useMemo } from "react";
import SidebarItem from "./SidebarItem";
import Navbar from "./Navbar";
interface SidebarProps {
  children: React.ReactNode;
}

const outfit = Outfit({
  weight: "500",
  subsets: ["latin"],
});

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "My Profile",
        active: pathname !== "/connections",
        href: "/",
      },
      {
        label: "My Connections",
        active: pathname === "/connections",
        href: "connections",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full shadow-md gap-4">
      <div className="hidden md:flex flex-col gap-y-8 pt-10 ">
        <button
          className={`rounded-md ${outfit.className} border text-2xl px-12 py-2 ml-16 shadow-md`}
        >
          Dashboard
        </button>
        <div className="w-[265px]">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="bg-[#FAFBFF] w-full  flex flex-col">
        <Navbar />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
