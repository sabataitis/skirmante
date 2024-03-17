import React from "react";

export const Container = ({ children, size = "default", className = "" }) => {
  const sizes = {
    small: "max-w-screen-sm py-6 px-6",
    medium: "max-w-screen-xl py-6 px-6",
    large: "max-w-screen-2xl py-6 px-2",
    default: "py-12 sm:py-6 px-6",
    full: "w-full",
  };

  return (
    <div className={`mx-auto ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};
