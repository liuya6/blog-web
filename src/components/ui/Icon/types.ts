// @ts-ignore
export type IconName = "sousuo"; // 从 iconfont.json 提取
// ...其他图标名称

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
