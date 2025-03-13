"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

const ImgList = [
  {
    id: 1,
    type: "image",
    img: "/img/banner1.jpg",
  },
  {
    id: 2,
    type: "video",
    img: "/img/banner2.jpg",
  },
];

export function Banner() {
  const [showBtn, setShowBtn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const autoplay = plugin.current;
  const handleMouseEnter = () => {
    setShowBtn(true);
    autoplay.stop();
  };
  const handleMouseLeave = () => {
    setShowBtn(false);
    autoplay.play();
  }; // 不传递任何参数

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", updateCurrentSlide);
    return () => {
      api.off("select", updateCurrentSlide);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      plugins={[autoplay]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="rounded-3xl overflow-hidden"
    >
      <CarouselContent>
        {ImgList.map((item) => {
          return (
            <CarouselItem key={item.id}>
              <div className="w-full h-[374px] relative">
                <Image
                  src={item.img}
                  fill
                  sizes="cover"
                  style={{
                    objectFit: "cover", // 保持比例填充
                    objectPosition: "center center",
                  }}
                  className="rounded-3xl"
                  priority
                  alt="lyq的博客"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className={showBtn ? "opacity-70" : "opacity-0"} />
      <CarouselNext className={showBtn ? "opacity-70" : "opacity-0"} />
      <div className="absolute bottom-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {ImgList.length}
      </div>
    </Carousel>
  );
}
