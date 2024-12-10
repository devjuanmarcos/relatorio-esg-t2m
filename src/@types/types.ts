import { IconType } from "react-icons";
import { ElementType } from "react";

type NextImageType = {
  imageUrl: string;
  imageDarkUrl?: string;
  altImage: string;
  extraClassName?: string;
  className?: string;
  ariaLabel: string;
  sizes: string;
  fill?: boolean;
  draggable?: boolean;
  priority?: boolean;
  blurDataURL?: string;
};

type IconProps = {
  Icon: IconType;
  url: string;
  size?: string;
  color?: string;
  alt: string;
};

type TitleDefaultType = {
  title: string;
  subtitle?: string;
  description?: string;
  extraClassName?: string;
  textColor: "text-cinza-800" | "text-branco-100";
};

type ItemCarouselType = {
  image: string;
  imageAlt: string;
};

type CarouselSectionType = {
  images: ItemCarouselType[];
  reverse?: boolean;
};

type IconTextCardType = {
  title: string;
  description: string;
  icon: IconType | ElementType;
};

export type { NextImageType, IconProps, TitleDefaultType, CarouselSectionType, ItemCarouselType, IconTextCardType };
