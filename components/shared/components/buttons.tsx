import Link from "next/link";
import * as React from "react";
import { tinaField } from "tinacms/dist/react";

export type Button = {
  label: string;
  type: "primary" | "secondary";
  link: string;
};

const styles = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-black",
};

function isExternalLink(button: Button) {
  button.link.startsWith("http") || button.link.startsWith("www");
}

const base =
  "rounded-full prose-lg py-3 px-12 font-bold transition duration-300 hover:scale-110";

function Button({ button }) {
  const field = tinaField(button);
  const btnClass = `${base} ${styles[button.type]}`;

  return (
    <Link href={button.link} passHref={isExternalLink(button)}>
      <button data-tina-field={field} className={btnClass}>
        {button.label}
      </button>
    </Link>
  );
}

export const Buttons = ({ buttons }: { buttons: Button[] }) => {
  if (!buttons.length) return null;
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {buttons.map((button, index) => {
        return <Button key={index} button={button} />
      })}
    </div>
  );
};
