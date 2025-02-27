"use client";

import Link from "next/link";
import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { cva } from "class-variance-authority";
import { NavigationList } from "./NavigationList";

import { navigationConst } from "./constants";

const headerStyles = {
  container: "h-nav flex items-center",
  content: "flex items-center w-full justify-between",
  menu: "hidden md:flex items-center text-sm text-gray-666",
};

export function Nav() {
  return (
    <nav className={headerStyles.container}>
      <div className={headerStyles.content}>
        <Link href="/">
          <Image src="/img/lyq.png" width="115" height="34" alt="lyq的博客" />
        </Link>
        <div className={headerStyles.menu}>
          <NavigationList navigationConst={navigationConst} />
        </div>
      </div>
    </nav>
  );
}
