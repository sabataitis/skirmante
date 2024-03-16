import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import { Global } from "../../tina/__generated__/types";
import styles from "./layout.module.css";
import { Inter } from "next/font/google";

type Props = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const Layout = (props: Props) => {
  const { children } = props;

  const global = layoutData;

  const cover_image = { backgroundImage: `url(${global?.bgImageUrl || ""})` };

  return (
    <div className={`${inter.className}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header data={global?.header} />
      <main style={cover_image} className={`${styles.bg}`}>
        {children}
      </main>
      <Footer data={global?.footer} />
    </div>
  );
};
