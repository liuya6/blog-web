import Image from "next/image";
import { Nav } from "./Nav";
import { Search } from "./Search";
import { Logo } from "./Logo";

export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full pl-9 pr-9">
        <Logo />
        <Nav />
        <Search />
      </div>
    </header>
  );
}
