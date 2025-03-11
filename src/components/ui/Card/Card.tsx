import React from "react";

import { Icon } from "@/components/ui/Icon";

import { cn } from "@/lib/utils";

// 定义自定义props接口
interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  title?: string;
  iconName?: string;
  iconClassName?: string;
}

export function Card({
  children,
  className,
  title,
  iconName,
  iconClassName,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "text-center px-6 py-5 rounded-3xl bg-white transition-all shadow-card-box-shadow hover:shadow-card-hover-shadow",
        className,
      )}
      {...props}
    >
      {title && iconName && (
        <h2 className="flex items-center mb-1.5">
          <Icon
            className={cn("mb-1", iconClassName)}
            name={iconName}
            size="20"
          />
          <span className="ml-1.5 text-base">{title}</span>
        </h2>
      )}
      <h2></h2>
      {children}
    </div>
  );
}
