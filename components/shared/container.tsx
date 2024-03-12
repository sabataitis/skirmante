import React from "react";

export const Container = ({ children, size = "default", className = "" }) => {
  const sizes = {
    small: "max-w-screen-sm py-14 px-6",
    medium: "max-w-screen-xl py-14 px-6",
    large: "max-w-screen-2xl py-14 px-2",
    default: "py-12 sm:py-14 px-6",
    full: "w-full",
  };

  return (
    <div className={`mx-auto min-h-full ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};
