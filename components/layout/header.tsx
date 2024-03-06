import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "../util/icon";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";
import styles from "../styles/navbar.module.css";

export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();

  return (
    <nav className={`flex justify-between ${styles.navbar}`}>
      <div>
        <Link
          href="/"
          className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]"
        >
          <Icon
            tinaField={tinaField(data, "icon")}
            parentColor={data.color}
            data={{
              name: data.icon.name,
              color: data.icon.color,
              style: data.icon.style,
            }}
          />
          <span data-tina-field={tinaField(data, "name")}>{data.name}</span>
        </Link>
      </div>
      <div>
        {data.nav &&
          data.nav.map((item, i) => {
            const activeItem =
              item.href === ""
                ? router.asPath === "/"
                : router.asPath.includes(item.href);
            return (
              <Link
                key={`${item.label}-${i}`}
                data-tina-field={tinaField(item, "label")}
                href={`/${item.href}`}
                className={`relative select-none text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 py-8 px-4 ${
                  activeItem ? `text-orange-500` : `opacity-70`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
      </div>
    </nav>
  );
};
