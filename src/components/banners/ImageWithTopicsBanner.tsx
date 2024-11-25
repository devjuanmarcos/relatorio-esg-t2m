"use client";

import React from "react";
import Image from "next/image";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";
import { CircleNumber, CircleNumberInterface } from "../cards/circleNumberCard";

export interface TopicsCaptionInterface {
  color: string;
  title: string;
}

export interface ImageWithTopicsBannerInterface {
  topics: CircleNumberInterface[];
  imageUrl: string;
  imageAlt: string;
  captions: TopicsCaptionInterface[];
}

export const ImageWithTopicsBanner: React.FC<ImageWithTopicsBannerInterface> = ({
  topics,
  captions,
  imageAlt,
  imageUrl,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  return (
    <div className={`px-2 md:px-12 flex flex-col md:flex-row gap-10 md:gap-[6rem]`}>
      <div className="flex flex-col gap-3">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={500}
          quality={100}
          className="w-full md:max-w-[23.0625rem] h-auto"
        />
        <div className="flex flex-col gap-2">
          {captions.map((caption) => (
            <div className="flex gap-4 items-center h-full" key={caption.title}>
              <div className={`w-full max-w-8 h-8 rounded-full ${caption.color}`} />
              <TextVariantes variant="paragraph_01">{caption.title}</TextVariantes>
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {topics.map((topic) => (
          <CircleNumber {...topic} key={topic.title} />
        ))}
      </div>
    </div>
  );
};
