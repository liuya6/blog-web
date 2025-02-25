// components/Header.tsx
import Link from "next/link";
// import { ChevronDownIcon } from '@heroicons/react/24/outline'

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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 左侧 Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">Q</span>
            <span className="text-lg font-medium text-gray-600">XY</span>
          </Link>

          {/* 导航菜单 */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center px-2 py-1 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="cursor-pointer flex items-center px-2 py-1 text-gray-600 hover:text-blue-500 transition-colors">
                    {item.name}
                    {/*<ChevronDownIcon className="ml-1 h-4 w-4" />*/}

                    {/* 下拉菜单 */}
                    <div className="absolute top-full left-0 hidden group-hover:block w-48 pt-2">
                      <div className="bg-white rounded-lg shadow-lg border">
                        {item.submenu?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 公告栏 */}
        <div className="mt-2 text-sm text-gray-500 text-center md:text-left">
          近期公告：域名又要到期了
        </div>
      </nav>
    </header>
  );
}
