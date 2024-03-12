import React, { useState } from "react";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";
import styles from "./header.module.css";

import { FiMenu } from "react-icons/fi";
import { Socials } from "../shared";

const Item = ({ item }) => {
  if (item.type === "button") {
    return (
      <Link href={`/${item.href}`}>
        <button
          data-tina-field={tinaField(item)}
          className="bg-white text-primary rounded-full px-12 py-2 font-bold transform hover:scale-105 "
        >
          {item.label}
        </button>
      </Link>
    );
  }

  return (
    <Link data-tina-field={tinaField(item)} href={`/${item.href}`}>
      {item.label}
    </Link>
  );
};

export const Header = ({ data }: { data: GlobalHeader }) => {
  const [show, setShow] = useState<boolean>();

  return (
    <nav
      className={`flex justify-between bg-primary font-bold text-white px-4 py-2 ${styles.navbar}`}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl">
          <span data-tina-field={tinaField(data, "name")}>{data.name}</span>
        </Link>
        <Socials socials={data.socials} />
      </div>

      {/* Desktop */}
      <div className="items-center gap-4 font-bold hidden lg:flex text-md">
        {data.nav.map((item) => (
          <Item key={`${item.label}`} item={item} />
        ))}
      </div>

      {/* Mobile */}
      <div
        className="cursor-pointer flex items-center gap-4 font-bold lg:hidden text-md"
        onClick={() => setShow(!show)}
      >
        <FiMenu size="24" />
      </div>

      <div
        className={`${styles.mobile} bg-primary ${
          show ? "visible max-h-80" : "invisible max-h-0"
        }`}
      >
        <div className="flex flex-col items-center pb-4 justify-center gap-4">
          {data.nav.map((item) => (
            <Item key={`${item.label}`} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};
