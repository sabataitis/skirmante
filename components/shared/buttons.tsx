import Link from "next/link";
import * as React from "react";
import { tinaField } from "tinacms/dist/react";

export type Button = {
  label: string;
  type: "primary" | "secondary";
  link: string;
};

export const Buttons = ({
  className = "",
  buttons,
}: {
  className?: string;
  buttons: Button[];
}) => {
  const styles = {
    primary: "bg-primary text-white hover:bg-white hover:text-black",
    secondary: "bg-secondary text-black hover:bg-white",
  };

  return (
    <div className={`${className} flex sm:flex-row flex-col items-center gap-4`}>
      {buttons &&
        buttons.map(function (action, index) {
          return (
            <Link key={index} href={action.link ? action.link : "/"}>
              <button
                data-tina-field={tinaField(action)}
                className={`${ styles[action.type]} prose-lg rounded-full px-12 py-3 font-bold transition duration-300 ease-in-out transform hover:scale-105`} 
              >
                {action.label}
              </button>
            </Link>
          );
        })}
    </div>
  );
};
