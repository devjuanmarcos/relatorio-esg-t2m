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
  type?: "default" | "mini";
  cardColor?: string;
  cardBorder?: string;
}

export const NumberCard: React.FC<NumberCardInterface> = ({ paragraph, title, icon, country, cardColor }) => {
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
    <div
      className={`bg-background rounded-lg p-8 flex flex-col gap-1 w-[12rem] text-primary shadow-md border-t border-t-primary `}
    >
      <TextVariantes variant="top_title">{title}</TextVariantes>
      {renderIcon()}
      <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
    </div>
  );
};

export const NumberCardWithIconAndBorder: React.FC<NumberCardInterface> = ({
  paragraph,
  title,
  icon,
  country,
  cardColor,
  type = "default",
  cardBorder,
}) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="w-full" />;
  }

  const renderIcon = () => {
    if (icon) {
      const Icon = icon as IconType;
      return <Icon className={`w-auto h-[3.5rem] text-${cardColor || "primary"}`} />;
    }

    if (country) {
      return <Flag country={country} size={56} alt={`Bandeira de ${country}`} />;
    }

    return null;
  };

  return (
    <div
      className={`bg-background relative border ${cardBorder || "border-primary"} rounded-lg px-8 pb-8 py-12 flex flex-col items-center gap-1 w-full ${type == "default" ? "max-w-[22rem] text-start" : "max-w-[15rem] text-center"} shadow-md `}
    >
      <div
        className={`absolute bottom-[88%] rounded-full bg-background border ${cardBorder || "border-primary"} flex items-center p-4 size-16 `}
      >
        {renderIcon()}
      </div>
      <div className="flex flex-col gap-1 w-full  ">
        <TextVariantes variant="top_title" extraClassName={`text-${cardColor || "primary"}`}>
          {title}
        </TextVariantes>
        <TextVariantes variant="paragraph_01">{paragraph}</TextVariantes>
      </div>
    </div>
  );
};
