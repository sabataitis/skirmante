import React from "react";

export const Container = ({
  children,
  size = "default",
  className = "",
}) => {
  const sizes = {
    medium: "max-w-screen-xl py-12 sm:py-14 px-6",
    large: "max-w-screen-2xl py-12 sm:py-14 px-2",
    default: "py-12 sm:py-14 px-6",
  };

  return (
    <section className={`${sizes[size]} ${className}`}>{children}</section>
  );
};