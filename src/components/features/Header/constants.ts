import { NavigationItem } from "./types";

const navigationConst: NavigationItem[] = [
  { title: "首页", href: "/" },
  { title: "博文・章", href: "/essay" },
  {
    title: "笔记・栈",
    href: "/notes",
    submenu: [
      {
        title: "技术笔记",
        href: "/notes/tech",
        description: "代码熔炉・工具链交响・方案星图",
      },
      {
        title: "随心所记",
        href: "/notes/feel",
        description: "思想原野・月痕踱影・文字森林",
      },
    ],
  },
  {
    title: "日志・記",
    href: "/log",
    submenu: [
      {
        title: "博客更新",
        href: "/log/update",
        description: "版本星轨・功能生长纹・修复补丁集",
      },
      {
        title: "日常记事",
        href: "/log/day",
        description: "时光切片・碎片记忆云・生活显微镜",
      },
      {
        title: "有感而发",
        href: "/log/feeling",
        description: "灵感流星雨・情绪色谱・思维潮汐线",
      },
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
