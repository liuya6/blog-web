"use client";
import { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { Logo } from "./Logo";

import { throttle } from "lodash-es";
import { cn } from "@/lib/utils";
import "./header.css";

export default function BlogHeader() {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      requestAnimationFrame(() => {
        setTop(window.scrollY === 0);
      });
    }, 100);

    // 初始化时同步一次滚动状态
    setTop(window.scrollY === 0);

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full h-[60px]",
        !isTop && "header-box-shadow",
      )}
    >
      <div className="flex justify-between items-center max-w-content m-auto">
        <Logo />
        <Nav />
        <Search />
      </div>
    </header>
  );
}
