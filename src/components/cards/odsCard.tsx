"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";

const odsBasePath = "/img/ods/";

export interface NumberCardInterface {
  ods: number[];
}

export const OdsCard: React.FC<NumberCardInterface> = ({ ods }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full" />;
  }

  const renderOds = () => {
    if (!ods || ods.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-4 mt-4">
        {ods.map((number, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={`${odsBasePath}${number}.png`}
              alt={`Ícone da ODS ${number}`}
              width={200}
              height={200}
              className="size-[5.5rem]"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-background relative border border-primary rounded-lg px-8 pb-8 py-12 flex flex-col items-center gap-1 w-fit min-w-64 shadow-md border-t border-t-primary">
      <div className="absolute bottom-[88%] rounded-full bg-background border border-primary flex items-center p-4 size-16">
        <FaGlobe className="w-auto h-[3.5rem] text-primary" />
      </div>
      <div className="flex flex-col gap-1 w-full text-start">
        <TextVariantes variant="top_title" extraClassName="text-primary">
          ODS relacionados
        </TextVariantes>
        {renderOds()}
      </div>
    </div>
  );
};
