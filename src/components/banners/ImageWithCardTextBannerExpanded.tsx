"use client";

import React, { useState } from "react";
import { Skeleton } from "@ui/skeleton";
import { buttonVariants } from "@ui/button";
import TextVariantes from "@ui/TextsVariants";
import Link from "next/link";
import { useIsMounted } from "@/hooks/useIsMounted";
import Image from "next/image";
import { useWindowSize } from "@/context/WindowSizeContext";
import { IconType } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";

export interface paragraphsWithTopicsInterface {
  subTitle?: string;
  topics?: string[];
  paragraphs?: string[];
  lastParagraphs?: string[];
}

export interface ImageWithCardTextBannerExpandedInterface {
  imageUrl?: string;
  icon?: IconType;
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
  pdfLink1?: string;
  pdfText1?: string;
  pdfLink2?: string;
  pdfText2?: string;
  paragraphsWithTopics?: paragraphsWithTopicsInterface[];
  imageExpand?: boolean;
}

export const ImageWithCardTextBannerExpanded: React.FC<ImageWithCardTextBannerExpandedInterface> = ({
  imageUrl,
  icon,
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
  pdfLink1,
  pdfLink2,
  pdfText1,
  pdfText2,
  paragraphsWithTopics,
  imageExpand,
}) => {
  const isMounted = useIsMounted();
  const { width } = useWindowSize();
  const [selectedImage, setSelectedImage] = useState<any>(null);

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/572]" />;
  }

  const renderTopTitle = (
    <div className="flex w-full mr-auto">
      <TextVariantes variant="top_title" lineColor={lineColor} lineBottom={title ? true : false}>
        {topTitle}
      </TextVariantes>
    </div>
  );

  const renderTextContent = (
    <div className="flex gap-6 md:gap-[3.5rem] lg:col-span-3">
      {!topTitle && imageAlignment === "start" && (
        <span
          className={`hidden md:flex font-openSans font-semibold text-[2rem] ${pointColor || "text-primary"} my-auto`}
        >
          •
        </span>
      )}
      <div className="flex flex-col gap-3">
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
                  <ul className="list-disc ml-6">
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
        {buttonLink && buttonText && (
          <Link href={buttonLink} target={buttonTarget} className={buttonVariants()}>
            {buttonText}
          </Link>
        )}
        <div className="flex gap-2">
          {pdfLink1 && pdfText1 && (
            <Link href={pdfLink1} target={"_blank"} className={buttonVariants({ variant: "link", size: "default" })}>
              {pdfText1}
            </Link>
          )}
          {pdfLink2 && pdfText2 && (
            <Link href={pdfLink2} target={"_blank"} className={buttonVariants({ variant: "link", size: "default" })}>
              {pdfText2}
            </Link>
          )}
        </div>
      </div>
      {!topTitle && imageAlignment === "end" && (
        <span
          className={`hidden md:flex font-openSans font-semibold text-[2rem] ${pointColor || "text-primary"} my-auto`}
        >
          •
        </span>
      )}
    </div>
  );

  const Icon = () => {
    if (icon) {
      const IconComponent = icon;
      return <IconComponent className="w-full h-auto aspect-[5/5] text-primary" />;
    }
    return null;
  };

  const handleClick = (image: any) => {
    if (selectedImage && selectedImage.id === image.id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative flex flex-col md:grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-[3.5rem] items-center px-4 md:px-12 ">
      {width && width <= 768 ? (
        <>
          {renderTextContent}
          {imageUrl ? (
            <>
              <div onClick={() => handleClick(imageUrl)}>
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  className={`w-full h-full max-h-[22.375rem] ${objectContain ? "object-contain" : "object-cover"} aspect-[532/358] rounded-[.75rem] lg:col-span-2`}
                  width={1064}
                  height={716}
                  quality={100}
                />
              </div>
              <AnimatePresence>
                {selectedImage && selectedImage === imageUrl && (
                  <motion.div
                    className="fullscreen-image fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                  >
                    <motion.img
                      src={imageUrl}
                      alt={imageAlt}
                      className="rounded-lg object-contain max-h-full max-w-full"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Icon />
          )}
        </>
      ) : imageAlignment === "start" ? (
        <>
          {imageUrl ? (
            <>
              <div onClick={() => handleClick(imageUrl)}>
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  className={`w-full h-full max-h-[22.375rem] ${objectContain ? "object-contain" : "object-cover"} aspect-[532/358] rounded-[.75rem] lg:col-span-2`}
                  width={1064}
                  height={716}
                  quality={100}
                />
              </div>
              <AnimatePresence>
                {selectedImage && selectedImage === imageUrl && (
                  <motion.div
                    className="fullscreen-image fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                  >
                    <motion.img
                      src={imageUrl}
                      alt={imageAlt}
                      className="rounded-lg object-contain max-h-full max-w-full"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Icon />
          )}
          {renderTextContent}
        </>
      ) : (
        <>
          {renderTextContent}
          {imageUrl ? (
            <>
              <div
                onClick={() => handleClick(imageUrl)}
                className="lg:col-span-2 cursor-pointer"
                title="Clique na imagem para expandir"
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  className={`w-auto h-full max-h-[22.375rem] ${objectContain ? "object-contain" : "object-cover"} aspect-[16/9] rounded-[.75rem] lg:col-span-2`}
                  width={1064}
                  height={716}
                  quality={100}
                />
              </div>
              <AnimatePresence>
                {selectedImage && selectedImage === imageUrl && (
                  <motion.div
                    className="fullscreen-image fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-90 p-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                  >
                    <motion.img
                      src={imageUrl}
                      alt={imageAlt}
                      className="rounded-lg object-contain max-h-full max-w-full"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.5 }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Icon />
          )}
        </>
      )}
    </div>
  );
};
