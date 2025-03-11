import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import { StatisticsList } from "./constants";
import { StatisticsItem } from "./type";

export function Statistics() {
  return (
    <Card className="mb-5" iconName="statistics" title="网站统计">
      {StatisticsList.map((item: StatisticsItem) => (
        <SItem key={item.dataIndex} {...item} />
      ))}
    </Card>
  );
}

const SItem = ({ title, iconName, dataIndex }: StatisticsItem) => {
  return (
    <div className="flex items-center h-7 text-sm">
      <Icon name={iconName} className="mb-1 mr-1" />
      <span>{title}：</span>
      <span className="flex-1 text-right">12323</span>
    </div>
  );
};
