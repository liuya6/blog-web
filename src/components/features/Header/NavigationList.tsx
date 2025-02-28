"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icon } from "@/components/ui/Icon";

import { NavigationListProps } from "./types";

const activePath = "text-primary";

export const NavigationList: React.FC<NavigationListProps> = ({
  navigationConst,
}) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <nav>
      {navigationConst.map((navigation, index) => {
        return navigation.submenu && navigation.submenu.length ? (
          <DropdownMenu key={`navigation-${index}`}>
            <DropdownMenuTrigger
              asChild
              className={cn(
                "p-4 focus:outline-none",
                pathname == navigation.href ||
                  navigation.submenu
                    .map((item) => item.href)
                    .filter((item) => item === pathname).length
                  ? activePath
                  : "",
              )}
            >
              {navigation.href ? (
                <Link href={navigation.href || ""}>{navigation.title}</Link>
              ) : (
                navigation.title
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <ul className="flex p-6">
                {navigation.submenu.map((component) => {
                  return component.img ? (
                    <ListItemImg
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ) : (
                    <ListItemText
                      key={component.title}
                      title={component.title}
                      description={component.description}
                      href={component.href}
                    />
                  );
                })}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={`navigation-${index}`}
            href={navigation.href || ""}
            className={cn(
              "p-4 pt-0 pb-0",
              pathname === navigation.href ? activePath : "",
            )}
          >
            {navigation.title}
          </Link>
        );
      })}
    </nav>
  );
};

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string; // 明确 title 为必填
  img?: string;
  description?: string; // 新增自定义属性
};
const ListItemText = React.forwardRef<React.ComponentRef<"a">, ListItemProps>(
  ({ title, description, className, children, ...props }, ref) => {
    return (
      <li className="text-gray-666 hover:text-primary">
        <a
          ref={ref}
          className={cn("block  w-[108px] mr-2", className)}
          {...props}
        >
          <div className="font-bold ">{title}</div>
          <p className="m-1.5 ml-0 mr-0 text-[10px] opacity-50">
            {description}
          </p>
        </a>
      </li>
    );
  },
);
ListItemText.displayName = "ListItemText";

const ListItemImg = React.forwardRef<React.ComponentRef<"a">, ListItemProps>(
  ({ className, description, title, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}img</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </li>
    );
  },
);
ListItemImg.displayName = "ListItemImg";
