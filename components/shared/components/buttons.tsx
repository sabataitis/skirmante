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
  return button?.link?.startsWith("http") || button?.link?.startsWith("www");
}

const base =
  "rounded-full prose-lg py-3 sm:px-12 px-6 font-bold transition duration-300 hover:scale-110";

function Button({ button }) {
  const field = tinaField(button);
  const btnClass = `${base} ${styles[button.type]}`;

  if (button?.link) {
    return (
      <Link
        className={btnClass}
        href={button.link}
        passHref={isExternalLink(button)}
      >
        <button title={button.label} aria-label={button.label} data-tina-field={field}>{button.label}</button>
      </Link>
    );
  }
  return null;
}

export const Buttons = ({ buttons }: { buttons: Button[] }) => {
  if (!buttons.length) return null;
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {buttons.map((button, index) => {
        return <Button key={index} button={button} />;
      })}
    </div>
  );
};
