import "./footer.css";

export default function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-text text-center leading-7 py-10">
        <p>©2025 - 2025 By LYQ</p>
        <p>前端：nextjs/Ui库:shadcn/Css:tailwindcss</p>
        <p>后端：nestjs</p>
      </div>
      <div className="relative before:absolute before:bottom-0 before:content-[''] before:w-full before:h-[36px] before:bg-[url(/img/hurdle.webp)] before:bg-cover">
        <div className="w-[974px] h-[118px] m-auto bg-[url(/img/animal.webp)] bg-cover relative z-1" />
      </div>
    </footer>
  );
}
