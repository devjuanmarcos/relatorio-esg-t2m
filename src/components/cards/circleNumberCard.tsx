"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";

export interface CircleNumberInterface {
  title: string;
  paragraph: string;
  number: number;
  color: string;
}

export const CircleNumber: React.FC<CircleNumberInterface> = ({ paragraph, title, number, color }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full" />;
  }

  return (
    <div className=" flex gap-4 items-start ">
      <span
        className={`top_title rounded-full flex justify-center items-center w-full max-w-[3.125rem] h-full max-h-[3.125rem] text-white ${color}`}
      >
        {number}
      </span>
      <div className="flex flex-col">
        <TextVariantes variant="title_card">{title}</TextVariantes>
        <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
      </div>
    </div>
  );
};
