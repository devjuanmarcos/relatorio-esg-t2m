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
  lineColor?: string;
  paragraph?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
  alignment: "end" | "start" | "bottom" | "bottomEnd";
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
  lineColor,
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
          className="w-20 h-auto aspect-[80/55]"
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
            <Image src={item} alt={"Ícone da ODS"} width={80} height={80} className="size-20" />
          </div>
        ))}
      </div>
    );
  };

  if (alignment == "bottom" || alignment == "bottomEnd") {
    return (
      <div
        className={`relative bg-no-repeat bg-cover flex flex-col gap-3 justify-center 
        ${alignment == "bottom" ? "lg:items-start" : "lg:items-end"} w-full max-lg:pt-[4rem] max-lg:px-2 lg:mb-20 pb-4 lg:py-[4.75rem] bg-center transition-all duration-500 blur-0`}
      >
        <Image
          src={imageUrl}
          alt="Cover Image"
          className=" bg-bottom object-cover aspect-[1440/572] lg:max-h-[28.75rem] w-full max-lg:rounded-lg"
          width={1000}
          height={600}
          sizes="(max-width: 768px) 100vw, 1000px"
        />
        {topTitle ? (
          <BoxCard
            type="simple"
            extraClassname={`${alignment == "bottom" ? " lg:ml-12" : " lg:mr-12"} lg:absolute -bottom-20 `}
          >
            {!icon && (
              <TextVariantes variant="top_title" extraClassName={topTitleColor}>
                {topTitle}
              </TextVariantes>
            )}
            {title && (
              <TextVariantes variant="title_georgia" lineBottom lineColor={lineColor}>
                {title}
              </TextVariantes>
            )}
            {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
            {buttonLink && buttonText && (
              <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
                {buttonText}
              </Link>
            )}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              {renderOds()}
              <div className="flex items-center gap-4 ">
                {renderIcon()}

                {icon && (
                  <TextVariantes variant="top_title" extraClassName={topTitleColor}>
                    {topTitle}
                  </TextVariantes>
                )}
              </div>
            </div>
          </BoxCard>
        ) : (
          <BoxCard
            type="simple"
            extraClassname={`${alignment == "bottom" ? "ml-2 lg:ml-12" : "mr-2 lg:mr-12"} absolute -bottom-20 `}
          >
            <TextVariantes variant="h2_title" lineBottom lineColor={lineColor}>
              {title}
            </TextVariantes>
            {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
            {buttonLink && buttonText && (
              <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
                {buttonText}
              </Link>
            )}
            {renderOds()}
          </BoxCard>
        )}
      </div>
    );
  }
  return (
    <div
      className={`relative bg-no-repeat bg-cover flex max-lg:flex-col gap-3 justify-center w-full ${
        alignment === "start" ? "lg:justify-start" : "lg:justify-end"
      }  lg:items-end w-full lg:aspect-[1440/572] lg:max-h-[35.75rem] px-2 lg:px-12 max-lg:pt-[2rem] pb-4 lg:py-[4.75rem] bg-center transition-all duration-500 blur-0`}
    >
      <Image
        src={imageUrl}
        alt="Cover Image"
        className="bg-img bg-bottom max-lg:object-cover max-lg:rounded-xl max-lg:aspect-[1440/572] max-lg:max-h-[28.75rem] max-lg:w-full"
        width={1000}
        height={600}
        sizes="(max-width: 768px) 100vw, 1000px"
      />
      {topTitle ? (
        <BoxCard type="simple">
          <div className="flex items-center gap-4">
            {renderIcon()}
            <TextVariantes variant="top_title" extraClassName={topTitleColor}>
              {topTitle}
            </TextVariantes>
          </div>
          {title && (
            <TextVariantes variant="title_georgia" lineBottom lineColor={lineColor}>
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
          <TextVariantes variant="h2_title" lineBottom lineColor={lineColor}>
            {title}
          </TextVariantes>
          {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
          {buttonLink && buttonText && (
            <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
              {buttonText}
            </Link>
          )}
          {renderOds()}
        </BoxCard>
      )}
    </div>
  );
};
