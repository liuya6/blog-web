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
  menu: "items-center text-sm text-gray-666",
};

export function Nav() {
  return (
    <nav className={headerStyles.container}>
      <div className={headerStyles.content}>
        <Link href="/" className="w-[115px] h-[34px] relative">
          <Image
            src="/img/lyq.png"
            alt="lyq的博客"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 115px"
            priority
          />
        </Link>
        <div className={headerStyles.menu}>
          <NavigationList navigationConst={navigationConst} />
        </div>
      </div>
    </nav>
  );
}
