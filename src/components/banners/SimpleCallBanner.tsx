"use client";

import React from "react";
import { Skeleton } from "@ui/skeleton";
import { buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { BoxCard } from "../ui/boxCard";
import { useIsMounted } from "@/hooks/useIsMounted";
import { IconType } from "react-icons";
import Image from "next/image";

interface IconImageInterface {
  icon: string | IconType;
  iconAlt?: string;
}

export interface SimpleCallBannerInterface {
  imageUrl: string;
  title: string;
  topTitle?: string;
  paragraph?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
  alignment: "end" | "start";
  topTitleColor?: string;
  icon?: IconImageInterface;
  ods?: string[];
}

export const SimpleCallBanner: React.FC<SimpleCallBannerInterface> = ({
  imageUrl,
  alignment,
  paragraph,
  title,
  topTitle,
  buttonLink,
  buttonTarget,
  buttonText,
  topTitleColor,
  icon,
  ods,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  const renderIcon = () => {
    if (!icon || !icon.icon) return null;

    if (typeof icon.icon === "string") {
      return (
        <Image
          src={icon.icon}
          alt={icon.iconAlt || "Ícone"}
          width={400}
          height={400}
          quality={100}
          className="w-20 h-auto"
        />
      );
    }

    const IconComponent = icon.icon as IconType;
    return <IconComponent className="w-10 h-10 text-primary" />;
  };

  const renderOds = () => {
    if (!ods || ods.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-4 mt-4">
        {ods.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={item} alt={"Ícone da ODS"} width={800} height={800} quality={100} className="size-32" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`bg-no-repeat bg-cover flex justify-center ${
        alignment === "start" ? "md:justify-start" : "md:justify-end"
      } items-center md:items-end w-full aspect-[1440/572] px-2 md:px-12 max-md:pt-[4rem] pb-4 md:py-[4.75rem] bg-center transition-all duration-500 blur-0`}
    >
      <Image src={imageUrl} alt="Cover Image" className="bg-img blur-up" width={1440} height={720} quality={100} />
      {topTitle ? (
        <BoxCard type="simple">
          <div className="flex items-center gap-4">
            {renderIcon()}
            <TextVariantes variant="top_title" extraClassName={topTitleColor}>
              {topTitle}
            </TextVariantes>
          </div>
          {title && (
            <TextVariantes variant="title_georgia" lineBottom>
              {title}
            </TextVariantes>
          )}
          {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
          {buttonLink && buttonText && (
            <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
              {buttonText}
            </Link>
          )}
          {renderOds()}
        </BoxCard>
      ) : (
        <BoxCard type="simple">
          <TextVariantes variant="h2_title" lineBottom>
            {title}
          </TextVariantes>
          {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
          {buttonLink && buttonText && (
            <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
              {buttonText}
            </Link>
          )}
        </BoxCard>
      )}
    </div>
  );
};
