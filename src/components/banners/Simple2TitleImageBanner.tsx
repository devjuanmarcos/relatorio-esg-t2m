"use client";

import React from "react";
import Image from "next/image";
import TextVariantes from "@ui/TextsVariants";
import { useIsMounted } from "@/hooks/useIsMounted";

export interface imagesCard {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

export interface Simple2TitleImageBannerInterface {
  firstImage: imagesCard;
  secondImage: imagesCard;
}

export const Simple2TitleImageBanner: React.FC<Simple2TitleImageBannerInterface> = ({ firstImage, secondImage }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  return (
    <div className="px-2 md:px-12 grid md:grid-cols-[1fr,12px,1fr] gap-x-10 gap-y-12">
      <div className={`flex flex-col gap-5 w-full text-start `}>
        <TextVariantes variant="h2_title">{firstImage.title}</TextVariantes>
        <Image
          src={firstImage.imageUrl}
          alt={firstImage.imageAlt}
          width={528}
          height={300}
          quality={100}
          className="w-full h-auto"
        />
      </div>
      <span className="hidden md:flex  font-openSans font-semibold text-[2rem] text-primary my-auto">•</span>
      <div className={`flex flex-col gap-5 w-full text-start `}>
        <TextVariantes variant="h2_title">{secondImage.title}</TextVariantes>
        <Image
          src={secondImage.imageUrl}
          alt={secondImage.imageAlt}
          width={528}
          height={300}
          quality={100}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
