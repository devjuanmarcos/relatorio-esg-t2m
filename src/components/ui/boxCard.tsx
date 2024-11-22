import { ReactNode } from "react";

interface BoxCardInterface {
  children: ReactNode;
  type: "main" | "simple";
}
export const BoxCard: React.FC<BoxCardInterface> = ({ children, type }) => {
  return (
    <div
      className={`rounded-xl bg-background p-4 sm:p-6 md:p-14 flex flex-col gap-5 
        ${type == "main" ? "max-w-[37.25rem]" : "max-w-[45.875rem]"}`}
    >
      {children}
    </div>
  );
};
