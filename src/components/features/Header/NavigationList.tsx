"use client";
import * as React from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { cn } from "@/lib/utils";
// import { Icon } from "@/components/ui/Icon";

import { NavigationItem, NavigationListProps } from "./types";

// const activePath = "text-primary";

export const NavigationList: React.FC<NavigationListProps> = ({
  navigationItem,
}) => {
  console.log(navigationItem);
  // const pathname = usePathname();
  return (
    <li>
      {navigationItem.submenu && navigationItem.submenu.length ? (
        <ListItemHasSub {...navigationItem} />
      ) : (
        <ListItemText {...navigationItem} />
      )}
    </li>
  );
};

const ListItemText: React.FC<NavigationItem> = ({ title, href, ...props }) => {
  return (
    <div className="text-base ml-3.5 hover:text-primary">
      {href ? <Link href={href}>{title}</Link> : title}
    </div>
  );
};
ListItemText.displayName = "ListItemText";

const ListItemHasSub: React.FC<NavigationItem> = ({
  title,
  href,
  ...props
}) => {
  return (
    <div>
      <div className="text-base ml-3.5 hover:text-primary">
        {href ? <Link href={href}>{title}</Link> : title}
      </div>
    </div>
  );
};
ListItemHasSub.displayName = "ListItemHasSub";

// type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
//   title: string; // 明确 title 为必填
//   img?: string;
//   description?: string; // 新增自定义属性
// };
// const ListItemText = React.forwardRef<React.ComponentRef<"a">, ListItemProps>(
//   ({ title, description, className, children, href, ...props }, ref) => {
//     return (
//       <li className="text-gray-666 hover:text-primary">
//         <Link
//           href={href}
//           ref={ref}
//           className={cn("block  w-[108px] mr-2", className)}
//           {...props}
//         >
//           <div className="font-bold ">{title}</div>
//           <p className="m-1.5 ml-0 mr-0 text-[10px] opacity-50">
//             {description}
//           </p>
//         </Link>
//       </li>
//     );
//   },
// );
// ListItemText.displayName = "ListItemText";

// const ListItemImg = React.forwardRef<React.ComponentRef<"a">, ListItemProps>(
//   ({ className, description, title, href, children, ...props }, ref) => {
//     return (
//       <li>
//         <Link
//           href={href}
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className,
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}img</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </Link>
//       </li>
//     );
//   },
// );
// ListItemImg.displayName = "ListItemImg";
