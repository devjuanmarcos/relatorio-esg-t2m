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
  alignment?: "end" | "start";
}

const CallBanner: React.FC<CallBannerInterface> = ({
  imageUrl,
  paragraph,
  title,
  buttonLink,
  buttonTarget,
  buttonText,
  alignment = "start",
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
      className={`relative bg-no-repeat bg-cover flex flex-col gap-3 justify-center ${
        alignment === "start" ? "md:justify-start" : "md:justify-end"
      } items-center md:items-end w-full
       md:aspect-[1440/572] px-2 md:px-12 pt-[8rem] md:pt-[10rem] pb-4 md:pb-[4.75rem] bg-center transition-all duration-500 blur-0`}
    >
      <Image
        ref={imageRef1}
        priority
        src={imageUrl}
        alt="Cover Image"
        className="bg-img blur-up max-md:object-cover max-md:rounded-xl max-md:aspect-[1440/572] max-md:max-h-[28.75rem] max-md:w-full"
        sizes="(max-width: 768px) 100vw, 1440px"
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
