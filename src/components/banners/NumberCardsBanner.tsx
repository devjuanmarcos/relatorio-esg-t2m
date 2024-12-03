"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { useIsMounted } from "@/hooks/useIsMounted";
import { NumberCard, NumberCardInterface, NumberCardWithIconAndBorder } from "../cards/numberCard";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { OdsCard } from "../cards/odsCard";

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
  numberCards: NumberCardInterface[];
  title?: string;
  topTitle?: string;
  paragraph?: string;
  type?: "default" | "border";
  alignment?: "default" | "center";
  extraButtonBottom?: ButtonInterface;
  ods?: number[];
  cardType?: "default" | "mini";
}

export const NumberCardsBanner: React.FC<NumberCardsBannerInterface> = ({
  numberCards,
  title,
  paragraph,
  topTitle,
  type = "default",
  alignment = "default",
  cardType = "default",
  extraButtonBottom,
  ods,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  return (
    <div
      className={`px-2 md:px-12 flex flex-col w-full ${type == "default" ? "gap-10" : "gap-20 "} ${alignment == "center" && "justify-center items-center text-center"} `}
    >
      <div className="flex items-center md:justify-between gap-12 flex-col md:flex-row ">
        <div className={`flex flex-col gap-3 max-w-[42rem] `}>
          {topTitle && (
            <TextVariantes variant="top_title" lineBottom lineCenter={type == "border"}>
              {topTitle}
            </TextVariantes>
          )}
          {title && <TextVariantes variant="h2_title">{title}</TextVariantes>}
          {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
        </div>
        {ods && <OdsCard ods={ods} />}
      </div>
      <div className={`flex flex-wrap  ${type == "default" ? "gap-y-8 ml-7" : "gap-12"}  justify-center`}>
        {numberCards.map((iconCard) => {
          if (type != "default") {
            return <NumberCardWithIconAndBorder key={iconCard.title} {...iconCard} type={cardType} />;
          } else {
            return <NumberCard key={iconCard.title} {...iconCard} />;
          }
        })}
      </div>
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
