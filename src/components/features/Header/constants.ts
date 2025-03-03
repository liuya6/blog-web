import { NavigationItem } from "./types";

const navigationConst: NavigationItem[] = [
  { title: "首页", href: "/" },
  {
    title: "文稿",
    href: "/essay",
    submenu: [
      {
        title: "编程",
        href: "/essay/programming",
      },
      {
        title: "学习",
        href: "/essay/study",
      },
    ],
  },
  {
    title: "手记",
    href: "/notes",
  },
  {
    title: "动态",
    href: "/updates",
  },
  {
    title: "一言",
    href: "/says",
  },
  {
    title: "更多",
    submenu: [
      { title: "音乐", href: "/music" },
      { title: "漫游影视", href: "/ent" },
      { title: "留言板", href: "/guestbook" },
      // { title: "关于我", href: "/about" },
    ],
  },
];

export { navigationConst };
