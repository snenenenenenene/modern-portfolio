import React from "react";

export const Marquee = ({
  wordList,
  className,
}: {
  wordList: string[];
  className?: string;
}) => {
  return (
    <main
      className={`${className} relative flex overflow-x-hidden border-y h-24 border-light-secondary items-center w-auto overflow-hidden font-bold `}
    >
      <div className="py-12 animate-marquee whitespace-nowrap items-center flex gap-x-4">
        {wordList.map((word: string, i: number) => (
          <p key={word + i} className="text-7xl text-center">
            {word}
          </p>
        ))}
      </div>

      <div className="absolute px-2 animate-marquee2 items-center whitespace-nowrap flex gap-x-4">
        {wordList.map((word: string, i: number) => (
          <p key={word + i} className="text-7xl text-center">
            {word}
          </p>
        ))}
      </div>
    </main>
  );
};