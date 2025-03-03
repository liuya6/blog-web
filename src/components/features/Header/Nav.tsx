import { NavigationList } from "./NavigationList";

import { navigationConst } from "./constants";

export function Nav() {
  return (
    <nav className="h-nav flex items-center justify-center absolute inset-0 mx-auto">
      <NavigationList navigationConst={navigationConst} />
    </nav>
  );
}
