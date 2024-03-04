import Link from "next/link";
import * as React from "react";
import { tinaField } from "tinacms/dist/react";

export type Action = {
  label: string;
  type: "primary" | "secondary";
  link: string;
};

export const Actions = ({
  className = "",
  actions,
}: {
  className: string;
  actions: Action[];
}) => {
  const styles = {
    primary: "bg-purple-700 text-white hover:bg-purple-600",
    secondary: "bg-orange-500 text-black hover:bg-orange-400",
  };

  return (
    <div className={`flex flex-wrap items-center gap-y-4 gap-x-6 ${className}`}>
      {actions &&
        actions.map(function (action, index) {
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
