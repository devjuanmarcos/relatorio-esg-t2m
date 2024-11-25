"use client";

import React from "react";
import TextVariantes from "@ui/TextsVariants";
import { Skeleton } from "@ui/skeleton";
import { useIsMounted } from "@/hooks/useIsMounted";
import { IconType } from "react-icons";
import Flag from "react-flagkit";

export interface NumberCardInterface {
  title: string;
  paragraph: string;
  icon?: IconType;
  country?: string;
}

export const NumberCard: React.FC<NumberCardInterface> = ({ paragraph, title, icon, country }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full" />;
  }

  const renderIcon = () => {
    if (icon) {
      const Icon = icon as IconType;
      return <Icon className="w-auto h-[1.5rem] text-primary" />;
    }

    if (country) {
      return <Flag country={country} size={24} alt={`Bandeira de ${country}`} />;
    }

    return null;
  };

  return (
    <div className="bg-background rounded-lg p-8 flex flex-col gap-1 w-[12rem] text-primary shadow-md border-t border-t-primary -ml-7 ">
      <TextVariantes variant="top_title">{title}</TextVariantes>
      {renderIcon()}
      <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
    </div>
  );
};
