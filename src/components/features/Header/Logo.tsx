import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <div className="relative w-[20px] h-[20px]">
        <Image
          src="/img/logo.png"
          alt="lyq的博客"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          priority
        />
      </div>
      <div className="h-[20px] ml-2 font-bold">LYQ的博客</div>
    </Link>
  );
}
