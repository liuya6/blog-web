export type NavigationItem = {
  name: string;
  href?: string;
  submenu?: NavigationItem[];
};

export interface NavigationListProps {
  navigationConst: NavigationItem[]; // 根据实际数据结构调整
}
