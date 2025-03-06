export type NavigationItem = {
  title: string;
  icon: string;
  href?: string;
  submenu?: (NavigationItem & { img?: string; description?: string })[];
};

export interface NavigationListProps {
  navigationItem: NavigationItem;
}
