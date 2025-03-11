import { Card } from "@/components/ui/Card";

export function Notices() {
  return (
    <Card
      className="mb-5"
      title="公告"
      iconName="notice"
      iconClassName="animate-notices-shake"
    >
      <div className="text-left leading-8 text-sm">
        <p>欢迎光临 文刀的博客 👋</p>
        <p>所遇 | 所见 | 所闻</p>
        <p>个人小窝 | 记录生活</p>
        <p>遇到Bug欢迎反馈😁</p>
      </div>
    </Card>
  );
}
