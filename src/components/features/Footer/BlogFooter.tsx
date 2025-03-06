import "./footer.css";
import Image from "next/image";

export default function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-text text-center leading-7 py-10">
        <p>©2025 - 2025 By LYQ</p>
        <p>前端：nextjs/Ui库:shadcn/Css:tailwindcss</p>
        <p>后端：nestjs</p>
      </div>
      <div className="relative before:absolute before:bottom-0 before:content-[''] before:w-full md:before:h-9 before:h-[4vw] before:bg-[url(/img/hurdle.webp)] before:bg-cover lazy-load">
        <Image
          src="/img/animal.webp" // 本地图片可以直接写相对路径
          alt="lyq的博客"
          width={974} // 必须声明宽度
          height={118} // 必须声明高度
          className="md:w-[974px] md:h-[118px] m-auto relative z-1"
        />
      </div>
    </footer>
  );
}
