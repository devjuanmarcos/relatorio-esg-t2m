"use client";

import React from "react";
import { Skeleton } from "@ui/skeleton";
import { buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";
import { useWindowSize } from "@/context/WindowSizeContext";

export interface ImageWithCardTextBannerInterface {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  topTitle?: string;
  paragraph?: string;
  paragraphs?: string[];
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: React.HTMLAttributeAnchorTarget | undefined;
  imageAlignment: "start" | "end";
  objectContain?: boolean;
  pointColor?: string;
  lineColor?: string;
}

export const ImageWithCardTextBanner: React.FC<ImageWithCardTextBannerInterface> = ({
  imageUrl,
  imageAlt,
  topTitle,
  paragraph,
  paragraphs,
  title,
  buttonLink,
  buttonTarget,
  buttonText,
  imageAlignment,
  objectContain,
  pointColor,
  lineColor,
}) => {
  const isMounted = useIsMounted();
  const { width } = useWindowSize();

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  const renderTopTitle = (
    <div className="flex  w-full mr-auto">
      <TextVariantes variant="top_title" lineColor={lineColor} lineBottom={title ? true : false}>
        {topTitle}
      </TextVariantes>
    </div>
  );

  const renderTextContent = (
    <div className="flex gap-6 md:gap-[3.5rem] lg:col-span-3">
      {!topTitle && imageAlignment == "start" && (
        <span
          className={`hidden md:flex  font-openSans font-semibold text-[2rem] ${pointColor || "text-primary"} my-auto`}
        >
          •
        </span>
      )}
      <div className="flex flex-col gap-3  ">
        {topTitle && renderTopTitle}
        <div className="flex flex-col gap-3">
          {title && (
            <TextVariantes variant={"h2_title"} lineColor={lineColor} lineBottom={topTitle ? false : true}>
              {title}
            </TextVariantes>
          )}
          {paragraph && (
            <TextVariantes variant="paragraph_01" lineColor={lineColor} lineTop={!title ? true : false}>
              {paragraph}
            </TextVariantes>
          )}
          {paragraphs &&
            paragraphs.map((text, index) => (
              <TextVariantes key={index} variant="paragraph_01">
                {text}
              </TextVariantes>
            ))}
        </div>
        {buttonLink && buttonText && (
          <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
            {buttonText}
          </Link>
        )}
      </div>
      {!topTitle && imageAlignment == "end" && (
        <span
          className={`hidden md:flex  font-openSans font-semibold text-[2rem] ${pointColor || "text-primary"} my-auto`}
        >
          •
        </span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-[3.5rem] items-center px-4 md:px-12 ">
      {width && width <= 768 ? (
        <>
          {renderTextContent}
          <Image
            src={imageUrl}
            alt={imageAlt}
            className={`w-full h-full max-h-[22.375rem] ${objectContain ? "object-contain" : "object-cover"} aspect-[532/358] rounded-[.75rem] lg:col-span-2 `}
            width={1064}
            height={716}
            quality={100}
          />
        </>
      ) : imageAlignment == "start" ? (
        <>
          <Image
            src={imageUrl}
            alt={imageAlt}
            className={`w-full h-full max-h-[22.375rem] ${objectContain ? "object-contain" : "object-cover"} aspect-[532/358] rounded-[.75rem] lg:col-span-2 `}
            width={1064}
            height={716}
            quality={100}
          />
          {renderTextContent}
        </>
      ) : (
        <>
          {renderTextContent}
          <Image
            src={imageUrl}
            alt={imageAlt}
            className={`w-full h-full max-h-[22.375rem] ${objectContain ? "object-contain" : "object-cover"} aspect-[532/358] rounded-[.75rem] lg:col-span-2 `}
            width={1064}
            height={716}
            quality={100}
          />
        </>
      )}
    </div>
  );
};
