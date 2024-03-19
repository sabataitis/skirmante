import React from "react";

export const Container = ({ children, size = "default", className = "" }) => {
  const sizes = {
    small: "max-w-screen-sm p-6",
    medium: "max-w-screen-xl sm:p-12 p-6",
    large: "max-w-screen-2xl sm:p-12 p-6",
    default: "sm:p-12 p-6",
    full: "w-full",
  };

  return (
    <div className={`mx-auto ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};
