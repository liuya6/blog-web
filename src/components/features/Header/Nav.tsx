"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import { navigation } from "./constants";

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
  const pathname = usePathname();

  console.log(pathname, "pathname");

  return (
    <nav className={headerStyles.container}>
      <div className={headerStyles.content}>
        {/* 品牌 Logo */}
        <Link href="/">
          <Image src="/img/lyq.png" width="115" height="34" alt="lyq的博客" />
        </Link>

        {/* 导航菜单 */}
        <div className={headerStyles.menu}>
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    navLink(),
                    pathname === item.href ? "text-primary font-bold" : "",
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <div className={cn(navLink(), "cursor-pointer")}>
                  {item.name}
                  {/* <ChevronDownIcon className="ml-1 h-4 w-4" /> */}

                  {/* 下拉菜单 */}
                  <div className={dropdownMenu({ visible: false })}>
                    <div className="bg-white rounded-lg shadow-lg border">
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={navLink({ variant: "dropdown" })}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
