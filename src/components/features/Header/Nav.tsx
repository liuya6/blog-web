import { NavigationList } from "./NavigationList";

import { NavigationItem } from "./types";
import { navigationConst } from "./constants";

export function Nav() {
  return (
    <nav className="hidden md:block absolute left-1/2 -translate-x-1/2 mx-auto">
      <ul className="h-nav flex items-center justify-center">
        {navigationConst.map((item: NavigationItem, index) => {
          return (
            <NavigationList
              key={`NavigationList${index}`}
              navigationItem={item}
            />
          );
        })}
      </ul>
    </nav>
  );
}
