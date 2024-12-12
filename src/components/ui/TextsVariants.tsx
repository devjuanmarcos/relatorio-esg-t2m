import React from "react";

type TextVariants =
  | "h1_main_title"
  | "paragraph_01"
  | "top_title"
  | "title_georgia"
  | "button_text"
  | "h2_title"
  | "title_card"
  | "h2_title_semibold"
  | "mega_button_text";

interface TextVariantesProps {
  variant: TextVariants;
  children: React.ReactNode;
  lineTop?: boolean;
  lineBottom?: boolean;
  lineCenter?: boolean;
  extraClassName?: string;
  lineColor?: string;
}

const variantClasses: Record<TextVariants, string> = {
  h1_main_title: "font-notosans text-2xl leading-snug md:text-3xl md:leading-snug lg:text-4xl lg:leading-tight",
  paragraph_01: "font-opensans text-sm leading-normal md:text-base md:leading-normal lg:text-base",
  top_title: "font-bold text-lg leading-normal md:text-xl lg:text-xl",
  title_georgia: "font-notosans text-2xl leading-snug md:text-3xl md:leading-snug lg:text-4xl lg:leading-[2.6875rem]",
  button_text: "font-opensans font-medium text-sm md:text-base",
  mega_button_text: "font-opensans font-bold text-[4rem] ",
  h2_title:
    "font-opensans font-bold text-2xl leading-snug md:text-2xl md:leading-[2rem] lg:text-3xl lg:leading-[2.6875rem]",
  title_card: "font-opensans font-semibold text-lg leading-normal md:text-xl lg:text-xl",
  h2_title_semibold:
    "font-opensans font-semibold text-2xl leading-snug md:text-2xl md:leading-[2rem] lg:text-3xl lg:leading-[2.6875rem]",
};

const TextVariantes: React.FC<TextVariantesProps> = ({
  variant,
  children,
  lineBottom,
  lineTop,
  extraClassName,
  lineColor,
  lineCenter,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${lineCenter && "items-center"} `}>
      {lineTop && <div className={`w-10 h-1 ${lineColor || "bg-primary"} rounded-ss-[.75rem]`} />}
      <p className={`${variantClasses[variant]} ${extraClassName}`}>{children}</p>
      {lineBottom && <div className={`w-10 h-1 ${lineColor || "bg-primary"} rounded-ss-[.75rem]`} />}
    </div>
  );
};

export default TextVariantes;
