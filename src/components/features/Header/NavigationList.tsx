"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NavigationItem, NavigationListProps } from "./types";

export const NavigationList: React.FC<NavigationListProps> = ({
  navigationItem,
}) => {
  const pathname = usePathname();
  return (
    <li className="h-full">
      {navigationItem.submenu && navigationItem.submenu.length ? (
        <ListItemHasSub {...navigationItem} pathname={pathname} />
      ) : (
        <ListItemText {...navigationItem} pathname={pathname} />
      )}
    </li>
  );
};

type ListItemProps = NavigationItem & {
  pathname: string;
};
const ListItemText: React.FC<ListItemProps> = ({
  title,
  href,
  icon,
  pathname,
}) => {
  return (
    <div
      className={cn(
        "text-base ml-5 hover:text-primary h-full flex items-center justify-center",
        pathname === href && "text-primary",
      )}
    >
      <Icon name={icon} className="mr-2 mb-1" />
      {href ? <Link href={href}>{title}</Link> : title}
    </div>
  );
};
ListItemText.displayName = "ListItemText";

const ListItemHasSub: React.FC<ListItemProps> = ({
  title,
  href,
  submenu,
  icon,
  pathname,
}) => {
  const isActive = (href?: string, submenu?: NavigationItem[]) => {
    if (submenu && submenu.length) {
      return submenu.map((item) => item.href).includes(pathname);
    }

    return href === pathname;
  };

  return (
    <div className="text-base ml-5 relative group h-full flex items-center justify-center">
      <Icon name={icon} className="mr-1 mb-1" />
      {href ? (
        <Link
          className={cn(
            "hover:text-primary",
            isActive(href, submenu) && "text-primary",
          )}
          href={href}
        >
          {title}
        </Link>
      ) : (
        <span
          className={cn(
            "hover:text-primary cursor-pointer",
            isActive(href, submenu) && "text-primary",
          )}
        >
          {title}
        </span>
      )}
      <div className="absolute top-full text-nowrap navigation-sub-box-shadow rounded-xl p-1.5 bg-white hidden opacity-0 transition-all group-hover:flex group-hover:opacity-100 animate-header-nav-sub-in">
        {submenu?.map((item: NavigationItem, index) => {
          return (
            <Link
              href={item.href || ""}
              key={index}
              className={cn(
                "flex items-center rounded cursor-pointer header-nav-sub px-4",
                isActive(item.href, item.submenu) && "text-primary",
              )}
            >
              <Icon name={item.icon} className="mr-2 mb-1" />
              <span className="leading-[44px]">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
ListItemHasSub.displayName = "ListItemHasSub";
