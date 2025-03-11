import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandom = (
  arg: Array<string | number> | number,
  list?: Array<string | number>,
) => {
  let realNum;
  if (arg instanceof Array) {
    if (!arg.length) return 0;
    realNum = arg.length + 1;
    return arg[Math.floor(Math.random() * realNum)];
  }
  realNum = arg + 1;
  if (list && list.length) {
    realNum = list.length;
  }
  const randomNum = Math.floor(Math.random() * realNum);
  return list && list.length ? list[randomNum] : randomNum;
};

// 新增确定性哈希函数
export const stringToHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};
