"use client";

import React from "react";
import { Skeleton } from "@ui/skeleton";
import { Button, buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { BoxCard } from "../ui/boxCard";

export interface MainBannerInterface {
  imageUrl: string;
  title: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
}

const MainBanner: React.FC<MainBannerInterface> = ({
  imageUrl,
  paragraph,
  title,
  buttonLink,
  buttonTarget,
  buttonText,
}) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  return (
    <div
      className="bg-no-repeat bg-cover flex justify-center md:justify-start items-center md:items-end w-full aspect-[1440/572] px-2 md:px-12 max-md:pt-[4rem] pb-4 md:py-[4.75rem] bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <BoxCard>
        <TextVariantes variant="h1_main_title" lineBottom>
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

const MemoizedMainBanner = React.memo(MainBanner);
MemoizedMainBanner.displayName = "MainBanner";

export default MemoizedMainBanner;
