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
  return isActive ? "text-orange-500" : "opacity-70";
}

export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();

  return (
    <nav className={`flex justify-between ${styles.navbar}`}>
      <div>
        <Link href="/" className="">
          <span data-tina-field={tinaField(data, "name")}>{data.name}</span>
        </Link>
      </div>
      <div>
        {data.nav.map((item, i) => {
          return (
            <Link
              key={`${item.label}-${i}`}
              data-tina-field={tinaField(item, "label")}
              href={`/${item.href}`}
              className={`relative select-none text-base inline-block tracking-wide transition duration-150 ease-out hover:opacity-100 py-8 px-4 ${isActiveItemClass(
                item,
                router,
              )}`}
            >
              {item.label}
            </Link>
          );
        }) || null}
      </div>
    </nav>
  );
};
