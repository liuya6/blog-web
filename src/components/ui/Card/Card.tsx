import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "text-center px-6 py-5 rounded-3xl bg-white transition-all shadow-card-box-shadow hover:shadow-card-hover-shadow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
