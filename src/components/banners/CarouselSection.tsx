"use client";
import React from "react";
import { CarouselSectionType } from "@/@types/types";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";
import { ItemCarouselType1, ItemCarouselType2 } from "../ui/Carousel";
import EmblaCarousel from "../ui/EmblaCarousel";
import { CarouselSkeletonSection } from "../ui/skeleton/InnovationInMovieSection";

export const CarouselSection: React.FC<CarouselSectionType> = ({ images, reverse }) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const OPTIONS: EmblaOptionsType = { loop: true };

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslations();

  if (!isMounted) {
    return <CarouselSkeletonSection />;
  }

  return (
    <div
      className={`flex ${reverse ? "flex-col-reverse md:flex-row-reverse " : "flex-col-reverse md:flex-row "}  justify-start  max-lg:px-5 px-12 items-center gap-8`}
    >
      <div className="w-full">
        <EmblaCarousel options={OPTIONS}>
          {images.map((image, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <ItemCarouselType1 key={index} {...image} />
                </div>
              </div>
            );
          })}
        </EmblaCarousel>
      </div>
    </div>
  );
};
