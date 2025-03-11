import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/ui/Card";

import { ArticleItem } from "./type";

const articleList: ArticleItem[] = [
  {
    id: "1",
    image: "/img/game.jpg",
    title: "在群晖上部署一个私有化聊天工具在群晖上部署一个私有化聊天工具",
    date: "2020-03-02",
  },
  {
    id: "2",
    image: "/img/movie.jpg",
    title: "电影",
    date: "2021-11-15",
  },
  {
    id: "3",
    image: "/img/tv.jpg",
    title: "电视剧",
    date: "2025-01-22",
  },
];

export function Article() {
  return (
    <Card className="mb-5" iconName="article" title="最新文章">
      {articleList.map((item) => (
        <ArticlesItem key={item.id} {...item} />
      ))}
    </Card>
  );
}

const ArticlesItem = ({ image, title, date }: ArticleItem) => {
  return (
    <Link
      href="/"
      className="flex py-1.5 border-b border-dashed border-[#f5f5f5]"
    >
      <div className="relative w-14 h-14 overflow-hidden rounded-xl">
        <Image
          className="hover:scale-110 transition-all"
          src={image}
          alt={title}
          fill
          sizes="cover"
          style={{
            objectFit: "cover", // 保持比例填充
            objectPosition: "center center",
          }}
          priority
        />
      </div>
      <div className="text-left flex-1 ml-2.5 relative">
        <h3 className="text-sm line-clamp-2">{title}</h3>
        <p className="text-xs absolute bottom-0 left-0 text-secondary-foreground">
          {date}
        </p>
      </div>
    </Link>
  );
};
