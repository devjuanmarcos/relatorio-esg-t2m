"use client";

import React from "react";

interface LoadingProps {
  size?: number;
  speed?: number;
}

export const Loading: React.FC<LoadingProps> = ({ size = 50, speed = 1.32 }) => {
  const bounceStyle = {
    animationDuration: `${speed}s`,
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center" style={{ width: size, height: size }}>
      <span>Carregando...</span>
      <div className="w-full h-full rounded-full bg-primary animate-bounce" style={bounceStyle} />
    </div>
  );
};
