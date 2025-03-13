"use client";

import React from "react";
import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Icon } from "@/components/ui/Icon";

// import { cn } from "@/lib/utils";

export function Search() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex justify-center items-center h-full hover:text-primary">
          <Icon name="search" className="mr-1 mb-1" />
          搜索
        </div>
      </DialogTrigger>
      <DialogContent className="top-0 md:top-[10%]">
        <DialogHeader>
          <DialogTitle>
            <p className="text-secondary">搜索</p>
          </DialogTitle>
          <DialogDescription asChild>
            <div>
              <div className="border rounded-full border-secondary leading-8 pl-3 mt-2">
                <input
                  type="text"
                  placeholder="搜索文章"
                  className="w-11/12 cursor-text"
                />
              </div>
              <MHr />
              <ul className="overflow-y-auto max-h-[calc(80vh-180px)]">
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    return <SearchItem index={i + 1} key={i} />;
                  })}
              </ul>
              <MHr />
              <div>共找到10篇文章</div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const MHr = () => {
  return (
    <div className="relative my-3">
      <p className="border-2 border-dashed border-secondary" />
    </div>
  );
};

type SearchItemProps = {
  title?: string;
  index: number;
};
const SearchItem: React.FC<SearchItemProps> = (searchItem) => {
  return (
    <li className="flex my-1">
      <div className="w-1/12 text-secondary">{searchItem?.index}.</div>
      <Link href="/" className="hover:text-secondary">
        <h5 className="font-bold text-secondary-foreground text-left">
          Hello World
        </h5>
        <p className="text-xs leading-5 text-left line-clamp-3">
          了1Panel，用Memos默认配置搭建测试了下，首页加载仍然特别慢，打开网络活动才看到首页加载了一个封装好的
          gomark
          库，文件比较大平均加载耗时约15ms左右。习惯性的点开了大佬们的博客，看到木木dalao的版本任然停留在0.18....
        </p>
      </Link>
    </li>
  );
};
SearchItem.displayName = "SearchItem";
