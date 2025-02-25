const navigation = [
  { name: "首页", href: "/" },
  { name: "博文・章", href: "/blog" },
  { name: "笔记・栈", href: "/notes" },
  { name: "日志・記", href: "/diary" },
  { name: "漫游影视", href: "/movies" },
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

export { navigation };
