import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { CardArticleProps } from "./type";

export function CardArticle({
  title,
  introduction,
  img,
  tag,
  date,
  className,
}: CardArticleProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group bg-background rounded-lg flex flex-col shadow-card-box-shadow hover:shadow-card-hover-shadow",
        className,
      )}
    >
      <div className="relative h-40 rounded-lg overflow-hidden">
        <Image
          className="transition-all group-hover:scale-105"
          src={img}
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
      <div className="flex-1 flex flex-col justify-between p-2">
        <div>
          <h2 className="line-clamp-1 font-bold my-1 group-hover:text-secondary">
            {title}
          </h2>
          <div className="line-clamp-2 text-sm text-secondary-foreground leading-6">
            {introduction}
          </div>
        </div>
        <div className="flex justify-between items-center text-xs mt-2 text-secondary-foreground">
          <div>{tag.map((item) => item.name).toString()}</div>
          <div>{date}</div>
        </div>
      </div>
    </Link>
  );
}
