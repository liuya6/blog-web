"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const searchStyles = {
  root: "flex items-center h-search justify-between",
  right:
    "cursor-pointer flex items-center justify-center transition-all duration-200 h-full",
  rightIcon: "text-xl leading-none",
  rightInput: "focus:outline-none text-gray-666 w-full pl-2",
};

export function Search() {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // 自动聚焦逻辑
  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      // 添加小延迟确保动画完成
      setTimeout(() => {
        inputRef.current?.focus();
      });
    }
  }, [isInputVisible]);

  const handleToggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className={searchStyles.root}>
      <div
        className={cn(
          searchStyles.right,
          isInputVisible
            ? "w-[175px] border-t-2 border-primary"
            : "w-[20px] border-0",
        )}
      >
        <div onClick={() => setIsInputVisible(true)}>
          <Icon name="sousuo" className={searchStyles.rightIcon}></Icon>
        </div>
        <input
          ref={inputRef}
          className={cn(
            searchStyles.rightInput,
            isInputVisible ? "" : "hidden",
          )}
          // autoFocus={true}
          onBlur={() => setIsInputVisible(false)}
          type="text"
          placeholder="search"
          autoFocus={isInputVisible}
        />
      </div>
    </div>
  );
}
