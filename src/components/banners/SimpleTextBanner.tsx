"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { useIsMounted } from "@/hooks/useIsMounted";
import { paragraphsWithTopicsInterface } from "./ImageWithCardTextBanner";

export interface SimpleTextBannerInterface {
  title: string;
  paragraph: string;
  paragraphsWithTopics?: paragraphsWithTopicsInterface[];
}

export const SimpleTextBanner: React.FC<SimpleTextBannerInterface> = ({ title, paragraph, paragraphsWithTopics }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return;
  }

  return (
    <div className="px-2 md:px-12 flex flex-col gap-3">
      <TextVariantes variant="h2_title" extraClassName="w-full max-w-[50rem]">
        {title}
      </TextVariantes>
      <TextVariantes variant="paragraph_01" extraClassName="text-justify">
        {paragraph}
      </TextVariantes>
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
  );
};
