"use client";
import React from "react";
import Image from "next/image";
import { ItemCarouselType } from "@/@types/types";

export const ItemCarouselType1: React.FC<ItemCarouselType> = ({ image, imageAlt }) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <div
      unselectable="on"
      onDragStart={(e) => e.preventDefault()}
      className="relative flex justify-center flex-shrink-0 w-full max-w-[23.875rem] h-full"
    >
      <Image
        src={image}
        alt={imageAlt}
        sizes="100vw"
        className="w-full h-full rounded-lg object-cover relative "
        width={400}
        height={400}
      />
    </div>
  );
};
