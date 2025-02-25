"use client";
// components/Icon/index.tsx
import { useEffect } from "react";

// 动态加载脚本
const loadIconfontScript = () => {
  if (
    typeof window !== "undefined" &&
    !document.querySelector("#iconfont-script")
  ) {
    const script = document.createElement("script");
    script.id = "iconfont-script";
    script.src = "/icons/iconfont.js";
    script.async = true;
    document.body.appendChild(script);
  }
};

// 图标组件
interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: string;
  size?: number | string;
}

const Icon = ({ name, size = "1em", className, ...props }: IconProps) => {
  useEffect(() => {
    loadIconfontScript();
  }, []);

  return (
    <svg
      className={`icon ${className || ""}`}
      style={{
        width: size,
        height: size,
        verticalAlign: "-0.15em",
        fill: "currentColor",
        overflow: "hidden",
      }}
      {...props}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export { Icon };
