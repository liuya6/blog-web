export type NavigationItem = {
  title: string;
  href?: string;
  submenu?: (NavigationItem & { img?: string; description?: string })[];
};

export interface NavigationListProps {
  navigationConst: NavigationItem[]; // 根据实际数据结构调整
}
