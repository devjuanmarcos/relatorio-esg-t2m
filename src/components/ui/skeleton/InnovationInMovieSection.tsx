import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const CarouselSkeletonSection: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full animate-pulse gap-8 max-lg:px-5 p-4 md:p-[6.25rem] items-center">
      <div className="w-full">
        <Skeleton className="w-full h-[29rem] rounded-lg" />
      </div>
      <div className="w-full md:max-w-[40%] h-full">
        <div className="mb-4">
          <Skeleton className="h-6 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-full mb-4" />
        </div>
        <div className="mt-6">
          <Skeleton className="h-8 w-fit bg-text-verde-medio text-text-branco rounded-md" />
        </div>
      </div>
    </div>
  );
};
