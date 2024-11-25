import React from "react";

type TextVariants =
  | "h1_main_title"
  | "paragraph_01"
  | "top_title"
  | "title_georgia"
  | "button_text"
  | "h2_title"
  | "title_card"
  | "h2_title_semibold";

interface TextVariantesProps {
  variant: TextVariants;
  children: React.ReactNode;
  lineTop?: boolean;
  lineBottom?: boolean;
  extraClassName?: string;
}

const variantClasses: Record<TextVariants, string> = {
  h1_main_title: "font-notosans text-4xl leading-tight",
  paragraph_01: "font-opensans text-base",
  top_title: "font-bold text-xl",
  title_georgia: "font-notosans text-4xl leading-[2.6875rem] ",
  button_text: "font-opensans font-medium",
  h2_title: "font-opensans font-bold text-3xl leading-[2.6875rem]",
  title_card: "font-opensans font-semibold text-xl",
  h2_title_semibold: "font-opensans font-semibold text-3xl leading-[2.6875rem]",
};

const TextVariantes: React.FC<TextVariantesProps> = ({ variant, children, lineBottom, lineTop, extraClassName }) => {
  return (
    <div className="flex flex-col gap-2">
      {lineTop && <div className="w-10 h-1 bg-primary rounded-ss-[.75rem]" />}
      <p className={`${variantClasses[variant]} ${extraClassName}`}>{children}</p>
      {lineBottom && <div className="w-10 h-1 bg-primary rounded-ss-[.75rem]" />}
    </div>
  );
};

export default TextVariantes;
