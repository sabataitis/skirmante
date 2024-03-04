import React from "react";

export const Container = ({
  children,
  size = "medium",
  width = "large",
  className = "",
}) => {
  const sizes = {
    medium: "max-w-5xl py-12 sm:py-14 px-6 sm:px-8",
    large: "max-w-screen-2xl py-22 sm:py-24 px-2 sm:px-6",
    default: "max-w-5xl py-12 sm:py-14 px-6 sm:px-8",
  };

  return (
    <div className={`mx-auto ${sizes[size]} ${className}`}>{children}</div>
  );
};
