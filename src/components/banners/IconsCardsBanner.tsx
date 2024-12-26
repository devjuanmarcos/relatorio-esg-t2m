"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";
import { IconType } from "react-icons";
import Image from "next/image";
import { paragraphsWithTopicsInterface } from "./ImageWithCardTextBanner";

export interface IconCard {
  id: number;
  icon: IconType;
  title: string;
  topTitle?: string;
  paragraph?: string;
  paragraphs?: string[];
}

export interface imageCard {
  id: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  paragraph: string;
}

export interface IconsCardsBannerInterface {
  topTitle?: string;
  paragraphsWithTopics?: paragraphsWithTopicsInterface[];
  title?: string;
  paragraph?: string;
  icons?: IconCard[];
  images?: imageCard[];
  type: "center" | "start";
}

export const IconsCardsBanner: React.FC<IconsCardsBannerInterface> = ({
  paragraph,
  title,
  icons,
  type,
  images,
  topTitle,
  paragraphsWithTopics,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  return (
    <div className="px-2 md:px-12 flex flex-col gap-[3.75rem] [&>*:first-child]:max-w-[62rem] ">
      <div className="flex flex-col gap-3">
        {topTitle && (
          <TextVariantes variant="top_title" lineBottom>
            {topTitle}
          </TextVariantes>
        )}
        {title && (
          <TextVariantes variant="h2_title" lineBottom>
            {title}
          </TextVariantes>
        )}
        {paragraph && <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>}
        {paragraphsWithTopics &&
          paragraphsWithTopics.map((section, index) => (
            <div key={index} className="flex flex-col gap-4 mt-2">
              {section.subTitle && <TextVariantes variant="title_card">{section.subTitle}</TextVariantes>}
              {section.paragraphs &&
                section.paragraphs.map((text, i) => (
                  <TextVariantes key={i} variant="paragraph_01">
                    {text}
                  </TextVariantes>
                ))}
              {section.topics && (
                <ul className="list-disc ml-6 ">
                  {section.topics.map((topic, i) => (
                    <li key={i} className="mb-2">
                      <TextVariantes variant="paragraph_01">{topic}</TextVariantes>
                    </li>
                  ))}
                </ul>
              )}
              {section.lastParagraphs &&
                section.lastParagraphs.map((text, i) => (
                  <TextVariantes key={i} variant="paragraph_01">
                    {text}
                  </TextVariantes>
                ))}
            </div>
          ))}
      </div>

      <div
        className={`flex flex-wrap items-start ${type == "start" ? "justify-start" : "justify-center"} ${icons ? "gap-x-5 md:gap-y-5 gap-y-12" : "gap-x-5 md:gap-x-[3.75rem] gap-y-12"}`}
      >
        {icons &&
          icons.map((iconCard) => {
            const Icon = iconCard.icon;
            return (
              <div
                key={iconCard.id}
                className={`flex flex-col gap-[.625rem] ${type == "center" ? "items-center text-center" : "items-start text-start"} w-full max-w-[19.5rem]`}
              >
                <Icon className="size-10 text-primary " />
                <TextVariantes variant="top_title">{iconCard.title}</TextVariantes>
                {iconCard.paragraph && <TextVariantes variant="paragraph_01">{iconCard.paragraph}</TextVariantes>}
                {iconCard.paragraphs &&
                  iconCard.paragraphs.map((text, index) => (
                    <TextVariantes key={index} variant="paragraph_01" extraClassName="max-w-[42rem] mx-auto">
                      {text}
                    </TextVariantes>
                  ))}
              </div>
            );
          })}
        {images &&
          images.map((image) => {
            return (
              <div
                key={image.id}
                className={`flex flex-col gap-[.625rem] ${type == "center" ? "items-center text-center" : "items-start text-start"} w-full max-w-[19.5rem]`}
              >
                <Image src={image.imageUrl} alt={image.imageAlt} width={150} height={150} quality={100} />
                <TextVariantes variant="top_title">{image.title}</TextVariantes>
                <TextVariantes variant="paragraph_01">{image.paragraph}</TextVariantes>
              </div>
            );
          })}
      </div>
    </div>
  );
};
