"use client";

import React from "react";
import { Skeleton } from "@ui/skeleton";
import { Button, buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";

interface firstBoxInterface {
  title: string;
  paragraphs: string[];
}

interface secondBoxInterface {
  title: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
}

export interface TwoCardsTextBannerInterface {
  firstBox: firstBoxInterface;
  secondBox: secondBoxInterface;
}

export const TwoCardsTextBanner: React.FC<TwoCardsTextBannerInterface> = ({ firstBox, secondBox }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 px-4 md:px-12">
      <div className="flex flex-col gap-3 ">
        <TextVariantes variant="h2_title" lineBottom>
          {firstBox.title}
        </TextVariantes>

        {firstBox.paragraphs.map((paragraph, index) => (
          <TextVariantes key={index} variant="paragraph_01">
            {paragraph}
          </TextVariantes>
        ))}
      </div>
      <span className="hidden md:flex  font-openSans font-semibold text-[2rem] text-primary">•</span>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <TextVariantes variant="top_title">{secondBox.title}</TextVariantes>
          <TextVariantes variant="paragraph_01">{secondBox.paragraph}</TextVariantes>
        </div>
        {secondBox.buttonLink && secondBox.buttonText && (
          <Link href={secondBox.buttonLink} target={secondBox.buttonTarget} className={buttonVariants()}>
            {secondBox.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};
