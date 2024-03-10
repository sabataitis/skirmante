import React, { useState } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader, GlobalHeaderNav } from "../../tina/__generated__/types";
import styles from "./header.module.css";

import { CiMenuBurger } from "react-icons/ci";

function isActiveItemClass(item: GlobalHeaderNav, router: NextRouter) {
  const isActive =
    item.href === ""
      ? router.asPath === "/"
      : router.asPath.includes(item.href);

  return isActive ? "underline" : "";
}

const Item = ({
  idx,
  item,
  className = "",
}: {
  item: GlobalHeaderNav;
  idx: number;
  className;
}) => {
  return (
    <Link
      className={`${className}`}
      key={`${item.label}-${idx}`}
      href={`/${item.href}`}
      data-tina-field={tinaField(item, "label")}
    >
      {item.label}
    </Link>
  );
};

export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();

  const [show, setShow] = useState<boolean>();

  return (
    <nav
      className={`flex justify-between bg-primary font-bold text-white px-4 py-2 ${styles.navbar}`}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl">
          <span data-tina-field={tinaField(data, "name")}>{data.name}</span>
        </Link>
      </div>
      {/* Desktop */}
      <div className="items-center gap-4 font-bold hidden sm:flex text-md">
        {data.nav.map((item, idx) => {
          return <Item idx={idx} item={item} className="p-2" />;
        })}
      </div>

      {/* Mobile */}
      <div
        className="cursor-pointer flex items-center gap-4 font-bold sm:hidden text-md"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger size="24" />
      </div>

      <div
        className={`${styles.mobile} bg-primary ${
          show ? "visible" : "invisible"
        }`}
      >
        <div className="flex flex-col items-center pb-4 justify-center gap-4">
          {data.nav.map((item, idx) => {
            return <Item idx={idx} item={item} className="p-2" />;
          })}
        </div>
      </div>
    </nav>
  );
};
