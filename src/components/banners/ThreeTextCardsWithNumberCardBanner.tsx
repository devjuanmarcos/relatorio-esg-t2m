"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";
import { IconType } from "react-icons";
import { NumberCard, NumberCardInterface } from "../cards/numberCard";

export interface TextCardInterface {
  title: string;
  paragraph: string;
  topTitle: string;
}

export interface ThreeTextCardsWithNumberCardBannerInterface {
  textCards: TextCardInterface[];
  numberCards: NumberCardInterface[];
}

export const ThreeTextCardsWithNumberCardBanner: React.FC<ThreeTextCardsWithNumberCardBannerInterface> = ({
  textCards,
  numberCards,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  const limitedTextCards = textCards.slice(0, 3);

  return (
    <div className="px-2 md:px-12 flex flex-col gap-10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-5">
        {limitedTextCards.slice(0, 2).map((card, index) => (
          <div key={index} className="flex flex-col gap-3">
            <TextVariantes variant="top_title" lineBottom>
              {card.topTitle}
            </TextVariantes>
            <TextVariantes variant="h2_title">{card.title}</TextVariantes>
            <TextVariantes variant="paragraph_01">{card.paragraph}</TextVariantes>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {limitedTextCards[2] && (
          <>
            <TextVariantes variant="top_title" lineBottom>
              {limitedTextCards[2].topTitle}
            </TextVariantes>
            <TextVariantes variant="h2_title">{limitedTextCards[2].title}</TextVariantes>
            <TextVariantes variant="paragraph_01">{limitedTextCards[2].paragraph}</TextVariantes>
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-y-8 ml-7 justify-center">
        {numberCards.map((iconCard) => {
          return <NumberCard key={iconCard.title} {...iconCard} />;
        })}
      </div>
    </div>
  );
};
