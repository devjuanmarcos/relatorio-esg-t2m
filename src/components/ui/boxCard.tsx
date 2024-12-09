import { ReactNode } from "react";

interface BoxCardInterface {
  children: ReactNode;
  type: "main" | "simple";
  extraClassname?: string;
}
export const BoxCard: React.FC<BoxCardInterface> = ({ children, type, extraClassname }) => {
  return (
    <div
      className={`rounded-xl bg-background-hover p-4 sm:p-6  flex flex-col gap-5 
        ${type == "main" ? "max-w-[37.25rem] md:p-14" : "max-w-[46.25rem] md:p-10"} ${extraClassname}`}
    >
      {children}
    </div>
  );
};
