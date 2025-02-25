import { Nav } from "./Nav";
import { Announcement } from "./Announcement";
import { Search } from "./Search";

const headerStyles = {
  root: "sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm",
  container: "max-w-content mx-auto",
};

export default function Header() {
  return (
    <header className={headerStyles.root}>
      <div className={headerStyles.container}>
        <Search />
        <Nav />
        <Announcement />
      </div>
    </header>
  );
}
