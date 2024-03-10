import * as React from "react";
import { wrapFieldsWithMeta } from "tinacms";

export const colorOptions = ["purple", "orange", "white", "gray", "none"];

export const ColorPickerInput = wrapFieldsWithMeta(({ input }) => {
  const classes = {
    purple: "bg-primary border-purple-600",
    orange: "bg-secondary border-orange-600",
    white: "bg-white-500 border-white-600",
    gray: "bg-gray-500 border-gray-600",
    none: "",
  };

  const bindActive = (input, color) => {
    return input.value === color
      ? "ring-[3px] ring-offset-2 ring-blue-400"
      : "";
  };

  const colorPickerClasses = "w-9 h-9 rounded-full shadow border";

  return (
    <>
      <input type="text" id={input.name} className="hidden" {...input} />
      <div className="flex gap-2 flex-wrap">
        {colorOptions.map((color) => {
          return (
            <button
              className={`${colorPickerClasses} ${classes[color]} ${bindActive(
                input,
                color,
              )}
        `}
              onClick={() => {
                input.onChange(color);
              }}
            ></button>
          );
        })}
      </div>
    </>
  );
});
