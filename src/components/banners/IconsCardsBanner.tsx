"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";
import { IconType } from "react-icons";

export interface IconCard {
  id: number;
  icon: IconType;
  title: string;
  paragraph: string;
}

export interface IconsCardsBannerInterface {
  title: string;
  paragraph: string;
  icons: IconCard[];
  type: "center" | "start";
}

export const IconsCardsBanner: React.FC<IconsCardsBannerInterface> = ({ paragraph, title, icons, type }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  return (
    <div className="px-2 md:px-12 flex flex-col gap-[3.75rem] [&>*:first-child]:max-w-[42rem] ">
      <div className="flex flex-col gap-3">
        <TextVariantes variant="h2_title" lineBottom>
          {title}
        </TextVariantes>
        <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-x-5 md:gap-y-5 gap-y-12">
        {icons.map((iconCard) => {
          const Icon = iconCard.icon;
          return (
            <div
              key={iconCard.id}
              className={`flex flex-col gap-[.625rem] ${type == "center" ? "items-center text-center" : "items-start text-start"} w-full max-w-[19.5rem]`}
            >
              <Icon className="size-10 text-primary " />
              <TextVariantes variant="top_title">{iconCard.title}</TextVariantes>
              <TextVariantes variant="paragraph_01">{iconCard.paragraph}</TextVariantes>
            </div>
          );
        })}
      </div>
    </div>
  );
};
