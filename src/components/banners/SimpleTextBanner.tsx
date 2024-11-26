"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { useIsMounted } from "@/hooks/useIsMounted";

export interface SimpleTextBannerInterface {
  title: string;
  paragraph: string;
}

export const SimpleTextBanner: React.FC<SimpleTextBannerInterface> = ({ title, paragraph }) => {
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
    </div>
  );
};
