"use client";
import { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { Logo } from "./Logo";

import { throttle } from "lodash-es";
import { cn } from "@/lib/utils";
import "./header.css";

export default function BlogHeader() {
  const [isTop, setTop] = useState(() =>
    typeof window !== "undefined" ? window.scrollY === 0 : true,
  );

  useEffect(() => {
    const handleScroll = throttle(() => {
      requestAnimationFrame(() => {
        setTop(window.scrollY === 0);
      });
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full", !isTop && "header-box-shadow")}
    >
      <div className="flex justify-between items-center w-full pl-9 pr-9 relative">
        <Logo />
        <Nav />
        <Search />
      </div>
    </header>
  );
}
