"use client";

import Link from "next/link";
import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { cva } from "class-variance-authority";
import { NavigationList } from "./NavigationList";

import { navigationConst } from "./constants";

export function Nav() {
  return (
    <nav className="h-nav flex items-center justify-center">
      <NavigationList navigationConst={navigationConst} />
    </nav>
  );
}
