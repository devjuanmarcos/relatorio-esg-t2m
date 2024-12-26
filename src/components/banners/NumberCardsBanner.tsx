"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { useIsMounted } from "@/hooks/useIsMounted";
import { NumberCard, NumberCardInterface, NumberCardWithIconAndBorder } from "../cards/numberCard";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { OdsCard } from "../cards/odsCard";
import Image from "next/image";

export interface TextCardInterface {
  title: string;
  paragraph: string;
  topTitle: string;
}

export interface ButtonInterface {
  buttonLink: string;
  buttonTarget: React.HTMLAttributeAnchorTarget;
  buttonText: string;
  buttonType?: string;
}

export interface NumberCardsBannerInterface {
  numberCards?: NumberCardInterface[];
  title?: string;
  topTitle?: string;
  paragraph?: string;
  type?: "default" | "border";
  alignment?: "default" | "center";
  extraButtonBottom?: ButtonInterface;
  ods?: number[];
  cardType?: "default" | "mini";
  cardColor?: string;
  cardBorder?: string;
  lineColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  graphic?: React.ComponentType;
  paragraphs?: string[];
  pdfLink1?: string;
  pdfText1?: string;
}

export const NumberCardsBanner: React.FC<NumberCardsBannerInterface> = ({
  numberCards,
  title,
  paragraph,
  topTitle,
  type = "default",
  alignment = "default",
  cardType = "default",
  cardColor,
  cardBorder,
  extraButtonBottom,
  ods,
  imageAlt,
  imageUrl,
  graphic,
  lineColor,
  paragraphs,
  pdfLink1,
  pdfText1,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  const Graphic = graphic;

  return (
    <div
      className={`px-2 md:px-12 flex flex-col w-full ${type == "default" ? "gap-10" : "gap-20 "} ${alignment == "center" && "justify-center items-center text-center"} `}
    >
      {(topTitle || title || imageUrl || paragraph || ods || graphic) && (
        <div className="flex items-center md:justify-between gap-12 flex-col md:flex-row ">
          <div className={`flex flex-col gap-3 `}>
            {topTitle && (
              <TextVariantes variant="top_title" lineBottom lineCenter={type == "border"} lineColor={lineColor}>
                {topTitle}
              </TextVariantes>
            )}
            {title && <TextVariantes variant="h2_title">{title}</TextVariantes>}
            {imageUrl && imageAlt && (
              <Image src={imageUrl} alt={imageAlt} width={1000} height={500} className="w-full h-auto" />
            )}
            {Graphic && <Graphic />}
            {paragraph && (
              <TextVariantes variant="paragraph_01" extraClassName="max-w-[42rem] mx-auto ">
                {paragraph}
              </TextVariantes>
            )}
            {paragraphs &&
              paragraphs.map((text, index) => (
                <TextVariantes key={index} variant="paragraph_01" extraClassName="max-w-[42rem] mx-auto">
                  {text}
                </TextVariantes>
              ))}
            {pdfLink1 && pdfText1 && (
              <Link href={pdfLink1} target={"_blank"} className={buttonVariants({ variant: "link", size: "default" })}>
                {pdfText1}
              </Link>
            )}
          </div>
          {ods && <OdsCard ods={ods} />}
        </div>
      )}
      {numberCards && (
        <div className={`flex flex-wrap  ${type == "default" ? "gap-y-8 ml-7" : "gap-12"}  justify-center`}>
          {numberCards.map((iconCard) => {
            if (type != "default") {
              return (
                <NumberCardWithIconAndBorder
                  key={iconCard.title}
                  {...iconCard}
                  type={cardType}
                  cardColor={cardColor}
                  cardBorder={cardBorder}
                />
              );
            } else {
              return <NumberCard key={iconCard.title} {...iconCard} cardColor={cardColor} cardBorder={cardBorder} />;
            }
          })}
        </div>
      )}
      {extraButtonBottom && (
        <Link
          className={`${buttonVariants(extraButtonBottom.buttonType || ("" as any))} -mt-8 `}
          href={extraButtonBottom.buttonLink}
          target={extraButtonBottom.buttonTarget}
        >
          {extraButtonBottom.buttonText}
        </Link>
      )}
    </div>
  );
};
