import { NavigationItem } from "./types";

const navigationConst: NavigationItem[] = [
  { title: "首页", href: "/" },
  { title: "博文・章", href: "/essay" },
  {
    title: "笔记・栈",
    href: "/notes",
    submenu: [
      { title: "技术笔记", href: "/notes/tech" },
      { title: "随心所记", href: "/notes/feel" },
    ],
  },
  {
    title: "日志・記",
    href: "/log",
    submenu: [
      { title: "博客更新", href: "/log/update" },
      { title: "日常记事", href: "/log/day" },
      { title: "有感而发", href: "/log/feeling" },
    ],
  },
  {
    title: "漫游影视",
    href: "/ent",
    submenu: [
      { title: "游戏佳作", href: "/ent/game", img: "/img/game.jpg" },
      { title: "电影影片", href: "/ent/movie", img: "/img/movie.jpg" },
      { title: "电视剧集", href: "/ent/tv", img: "/img/tv.jpg" },
      { title: "动漫电源", href: "/ent/anime", img: "/img/anime.png" },
      { title: "动画剧集", href: "/ent/comic", img: "/img/comic.png" },
    ],
  },
  { title: "留言板", href: "/guestbook" },
  {
    title: "更多的",
    submenu: [
      { title: "关于我", href: "/about" },
      { title: "归档", href: "/archives" },
      { title: "音乐", href: "/music" },
    ],
  },
];

export { navigationConst };
