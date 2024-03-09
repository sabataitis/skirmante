import React from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader, GlobalHeaderNav } from "../../tina/__generated__/types";
import styles from "../styles/navbar.module.css";

function isActiveItemClass(item: GlobalHeaderNav, router: NextRouter) {
  const isActive =
    item.href === ""
      ? router.asPath === "/"
      : router.asPath.includes(item.href);

  return isActive ? "underline" : "";
}

export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();

  return (
    <nav className={`flex justify-between bg-primary font-bold text-white px-4 py-2 ${styles.navbar}`}>
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl">
          <span data-tina-field={tinaField(data, "name")}>{data.name}</span>
        </Link>
      </div>
      <div className="items-center gap-4 font-bold hidden sm:flex text-md">
        {data.nav.map((item, i) => {
          return (
            <Link
              key={`${item.label}-${i}`}
              data-tina-field={tinaField(item, "label")}
              href={`/${item.href}`}
              className={`${isActiveItemClass( item, router)}`}
            >
              {item.label}
            </Link>
          );
        }) || null}
      </div>
    </nav>
  );
};
