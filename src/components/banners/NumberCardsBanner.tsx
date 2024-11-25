"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { useIsMounted } from "@/hooks/useIsMounted";
import { NumberCard, NumberCardInterface } from "../cards/numberCard";

export interface TextCardInterface {
  title: string;
  paragraph: string;
  topTitle: string;
}

export interface NumberCardsBannerInterface {
  numberCards: NumberCardInterface[];
  title?: string;
  topTitle?: string;
  paragraph?: string;
}

export const NumberCardsBanner: React.FC<NumberCardsBannerInterface> = ({
  numberCards,
  title,
  paragraph,
  topTitle,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  return (
    <div className="px-2 md:px-12 flex flex-col gap-10 ">
      <div className="flex flex-col gap-3">
        {topTitle && (
          <TextVariantes variant="top_title" lineBottom>
            {topTitle}
          </TextVariantes>
        )}
        {title && <TextVariantes variant="h2_title">{title}</TextVariantes>}
        {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
      </div>
      <div className="flex flex-wrap gap-y-8 ml-7 justify-center">
        {numberCards.map((iconCard) => {
          return <NumberCard key={iconCard.title} {...iconCard} />;
        })}
      </div>
    </div>
  );
};
