"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
// import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icon } from "@/components/ui/Icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";

import { NavigationListProps } from "./types";

const activePath = "text-primary";

export const NavigationList: React.FC<NavigationListProps> = ({
  navigationConst,
}) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationConst.map((navigation, index) => {
          return (
            <NavigationMenuItem key={`navigationMenuItem-${index}`}>
              {navigation.submenu && navigation.submenu.length ? (
                <>
                  <NavigationMenuTrigger
                    className={
                      pathname == navigation.href ||
                      navigation.submenu
                        .map((item) => item.href)
                        .filter((item) => item === pathname).length
                        ? activePath
                        : ""
                    }
                  >
                    {navigation.href ? (
                      <NavigationMenuLink
                        href={navigation.href || ""}
                        className="p-0"
                      >
                        {navigation.title}
                      </NavigationMenuLink>
                    ) : (
                      navigation.title
                    )}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {navigation.submenu.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  href={navigation.href || ""}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === navigation.href ? activePath : "",
                  )}
                >
                  {navigation.title}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
