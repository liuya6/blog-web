import { NavigationList } from "./NavigationList";

import { NavigationItem } from "./types";
import { navigationConst } from "./constants";

export function Nav() {
  return (
    <nav className="absolute inset-0 mx-auto">
      <ul className="h-nav flex items-center justify-center">
        {navigationConst.map((item: NavigationItem) => {
          return <NavigationList key={item.href} navigationItem={item} />;
        })}
      </ul>
    </nav>
  );
}
