/** @format */

interface Props {
  children: React.ReactNode;
  className?: string;
}
import React from "react";
import clsx from "clsx";

export default function Container({ children, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        "w-full max-w-7xl py-0 mx-auto space-y-5 lg:px-10"
      )}
    >
      {children}
    </div>
  );
}
