"use client";

import Link from "next/link";
import Image from "next/image";
// import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import { NavigationList } from "./NavigationList";

import { navigationConst } from "./constants";

const navLink = cva("flex items-center px-4 transition-colors", {
  variants: {
    variant: {
      default: "text-gray-600 hover:text-blue-500",
      dropdown: "text-gray-600 hover:bg-gray-50 hover:text-blue-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const dropdownMenu = cva("absolute top-full left-0 w-48 pt-2", {
  variants: {
    visible: {
      true: "block",
      false: "hidden group-hover:block",
    },
  },
});

const headerStyles = {
  container: "h-nav flex items-center",
  content: "flex items-center w-full justify-between",
  menu: "hidden md:flex items-center text-sm text-gray-666",
};

export function Nav() {
  return (
    <nav className={headerStyles.container}>
      <div className={headerStyles.content}>
        {/* 品牌 Logo */}
        <Link href="/">
          <Image src="/img/lyq.png" width="115" height="34" alt="lyq的博客" />
        </Link>

        {/* 导航菜单 */}
        <div className={headerStyles.menu}>
          <NavigationList navigationConst={navigationConst} />
        </div>
      </div>
    </nav>
  );
}
