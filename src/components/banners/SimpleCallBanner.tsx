"use client";

import React from "react";
import { Skeleton } from "@ui/skeleton";
import { buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { BoxCard } from "../ui/boxCard";
import { useIsMounted } from "@/hooks/useIsMounted";

export interface SimpleCallBannerInterface {
  imageUrl: string;
  title: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
  alignment: "end" | "start";
}

export const SimpleCallBanner: React.FC<SimpleCallBannerInterface> = ({
  imageUrl,
  alignment,
  paragraph,
  title,
  buttonLink,
  buttonTarget,
  buttonText,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  return (
    <div
      className={`bg-no-repeat bg-cover flex justify-center ${alignment == "start" ? "md:justify-start" : "md:justify-end"} items-center md:items-end w-full 
        aspect-[1440/572] px-2 md:px-12 max-md:pt-[4rem] pb-4 md:py-[4.75rem] bg-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <BoxCard type="simple">
        <TextVariantes variant="h2_title" lineBottom>
          {title}
        </TextVariantes>
        <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
        {buttonLink && buttonText && (
          <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
            {buttonText}
          </Link>
        )}
      </BoxCard>
    </div>
  );
};
