export type NavigationItem = {
  title: string;
  href?: string;
  icon?: string;
  submenu?: (NavigationItem & { img?: string; description?: string })[];
};

export interface NavigationListProps {
  navigationItem: NavigationItem;
}
