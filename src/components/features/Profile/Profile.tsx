import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import { profileTag, linkList } from "./constants";

export function ProfileCom() {
  return (
    <Card className="mb-5">
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
      <Link
        href="https://github.com/liuya6"
        target="_blank"
        className="flex h-8 justify-center items-center bg-primary text-white rounded-full mt-3.5"
      >
        <Icon name="github" className="mr-1 mb-1" />
        <span>Github</span>
      </Link>
      <ul className="flex items-center justify-between w-4/5 m-auto mt-5 ">
        {linkList.map((link, index) => (
          <Link href={link.href} target="_blank" key={`link+${index}`}>
            <Icon name={link.icon} size="20" />
          </Link>
        ))}
      </ul>
    </Card>
  );
}
