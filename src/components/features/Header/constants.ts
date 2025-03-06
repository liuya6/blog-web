import { NavigationItem } from "./types";

const navigationConst: NavigationItem[] = [
  { title: "首页", icon: "home", href: "/" },
  {
    title: "文稿",
    icon: "essay",
    href: "/essay",
    submenu: [
      {
        title: "编程",
        icon: "programming",
        href: "/essay/programming",
      },
      {
        title: "学习",
        icon: "study",
        href: "/essay/study",
      },
    ],
  },
  {
    title: "手记",
    icon: "notes",
    href: "/notes",
  },
  {
    title: "动态",
    icon: "updates",
    href: "/updates",
  },
  {
    title: "一言",
    icon: "says",
    href: "/says",
  },
  {
    title: "更多",
    icon: "more",
    submenu: [
      { title: "音乐", icon: "music", href: "/music" },
      { title: "影视", icon: "movie", href: "/movie" },
      { title: "游戏", icon: "game", href: "/game" },
      { title: "留言板", icon: "guestbook", href: "/guestbook" },
      // { title: "关于我", href: "/about" },
    ],
  },
];

export { navigationConst };
