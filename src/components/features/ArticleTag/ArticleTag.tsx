import Link from "next/link";
import { Card } from "@/components/ui/Card";

import { cn, stringToHash } from "@/lib/utils";
import { ArticleTagItem } from "./type";
import { tagList, textSizeClassName, textColorList } from "./constants";

export function ArticleTag() {
  return (
    <Card className="mb-5" iconName="tag" title="标签">
      <div className="flex justify-around flex-wrap">
        {tagList.map((item: ArticleTagItem) => (
          <TabItem key={item.id} {...item} />
        ))}
      </div>
    </Card>
  );
}

const TabItem = ({ title, href }: ArticleTagItem) => {
  // 使用标签名称生成确定性索引
  const tagHash = stringToHash(title);
  // 确定性选择样式
  const sizeClass = textSizeClassName[tagHash % textSizeClassName.length];
  const colorClass = textColorList[tagHash % textColorList.length];

  return (
    <Link className={cn("mr-1.5", sizeClass, colorClass)} href={href}>
      {title}
    </Link>
  );
};
