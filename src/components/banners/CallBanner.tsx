"use client";

import React from "react";
import { Skeleton } from "@ui/skeleton";
import { buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { BoxCard } from "../ui/boxCard";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";

export interface CallBannerInterface {
  imageUrl: string;
  title: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
}

const CallBanner: React.FC<CallBannerInterface> = ({
  imageUrl,
  paragraph,
  title,
  buttonLink,
  buttonTarget,
  buttonText,
}) => {
  const isMounted = useIsMounted();
  const imageRef1 = React.useRef(null);

  const handleImageLoad = (ref: any) => {
    ref.current.dataset.loaded = "true";
  };

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  return (
    <div
      className={`bg-no-repeat bg-cover flex justify-center md:justify-start items-center md:items-end w-full
           aspect-[1440/572] px-2 md:px-12 pt-[10rem] pb-4 md:pb-[4.75rem] bg-center transition-all duration-500 blur-0`}
    >
      <Image
        ref={imageRef1}
        priority
        src={imageUrl}
        alt="Cover Image"
        className="bg-img blur-up"
        width={1440}
        height={720}
        quality={100}
        placeholder="blur"
        blurDataURL="data:..."
        onLoad={() => handleImageLoad(imageRef1)}
      />
      <BoxCard type="main">
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

const MemoizedCallBanner = React.memo(CallBanner);
MemoizedCallBanner.displayName = "CallBanner";

export default MemoizedCallBanner;
