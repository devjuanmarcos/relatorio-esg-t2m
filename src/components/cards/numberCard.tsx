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
    <div className="bg-background rounded-lg p-8 flex flex-col gap-1 w-[12rem] text-primary shadow-md border-t border-t-primary ">
      <TextVariantes variant="top_title">{title}</TextVariantes>
      {renderIcon()}
      <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
    </div>
  );
};

export const NumberCardWithIconAndBorder: React.FC<NumberCardInterface> = ({ paragraph, title, icon, country }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full" />;
  }

  const renderIcon = () => {
    if (icon) {
      const Icon = icon as IconType;
      return <Icon className="w-auto h-[3.5rem] text-primary" />;
    }

    if (country) {
      return <Flag country={country} size={56} alt={`Bandeira de ${country}`} />;
    }

    return null;
  };

  return (
    <div className="bg-background relative border border-primary rounded-lg px-8 pb-8 py-12 flex flex-col items-center gap-1 w-[22rem]  shadow-md border-t border-t-primary ">
      <div className="absolute -top-[15%] rounded-full bg-background border border-primary flex items-center p-4 size-16 ">
        {renderIcon()}
      </div>
      <div className="flex flex-col gap-1 w-full text-start ">
        <TextVariantes variant="top_title" extraClassName="text-primary">
          {title}
        </TextVariantes>
        <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
      </div>
    </div>
  );
};
