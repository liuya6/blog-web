import { NavigationItem } from "./types";

const navigationConst: NavigationItem[] = [
  { name: "首页", href: "/" },
  { name: "博文・章", href: "/blog" },
  { name: "笔记・栈", href: "/notes" },
  {
    name: "日志・記",
    href: "/diary",
    submenu: [
      { name: "博客更新", href: "/diary/update" },
      { name: "日常记事", href: "/diary/day" },
      { name: "有感而发", href: "/diary/feel" },
    ],
  },
  {
    name: "漫游影视",
    href: "/movies",
    submenu: [
      { name: "动漫", href: "/movies/anime" },
      { name: "电影", href: "/movies/video" },
      { name: "游戏", href: "/movies/game" },
    ],
  },
  { name: "留言板", href: "/guestbook" },
  {
    name: "更多的",
    submenu: [
      { name: "随机・链", href: "/links" },
      { name: "标签云", href: "/tags" },
      { name: "关于我", href: "/about" },
    ],
  },
];

export { navigationConst };
