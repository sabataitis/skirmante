import React from "react";
import { tinaField } from "tinacms/dist/react";

export const Heading = ({
  children,
  size = "medium",
  name,
  data,
  className = "",
}) => {
  const sizes = {
    small: "text-md sm:text-lg",
    medium: "text-lg sm:text-2xl",
    large: "text-2xl sm:text-4xl",
    xl: "text-3xl sm:text-6xl",
  };

  return (
    <h1
      data-tina-field={tinaField(data, name)}
      className={`${sizes[size]} ${className}`}
    >
      {children}
    </h1>
  );
};
