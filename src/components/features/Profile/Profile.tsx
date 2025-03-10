import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/Card";

import { profileTag, linkList } from "./constants";

export function ProfileCom() {
  return (
    <Card>
      <div className="flex items-center justify-center w-full">
        <Image
          src="/img/profile.png"
          alt="profile"
          width="110"
          height="110"
          className="rounded-full"
        />
      </div>
      <div className="leading-[44px] text-xl">文刀</div>
      <div className="text-sm">德因损厚，福自心宽</div>
      <ul className="flex items-center justify-between w-full">
        {profileTag.map((tag, index) => (
          <li key={`tag_${index}`} className="mt-3.5 mb-1 flex-1">
            <p className="text-xs leading-6">{tag.title}</p>
            <p className="leading-8 font-bold">100</p>
          </li>
        ))}
      </ul>
      <div>Github</div>
      <ul>
        {linkList.map((link, index) => (
          <Link href={link.href} key={`link+${index}`}>
            {link.title}
          </Link>
        ))}
      </ul>
    </Card>
  );
}
