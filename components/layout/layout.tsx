import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import { Global } from "../../tina/__generated__/types";
import styles from "./layout.module.css";
import { Inter } from "next/font/google";

type Props = {
  data?: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const Layout = (props: Props) => {
  const { data = layoutData, children } = props;

  const cover_image = { backgroundImage: `url(${data?.bgImageUrl || ""})` };

  return (
    <div className={`${inter.className}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header data={data?.header} />
      <main style={cover_image} className={`${styles.bg}`}>
        {children}
      </main>
      <Footer data={data?.footer} />
    </div>
  );
};
