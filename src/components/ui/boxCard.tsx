import { ReactNode } from "react";

interface BoxCardInterface {
  children: ReactNode;
}
export const BoxCard: React.FC<BoxCardInterface> = ({ children }) => {
  return (
    <div className=" rounded-xl bg-background p-4 sm:p-6 md:p-14 flex flex-col gap-5 max-w-[37.25rem]">{children}</div>
  );
};
