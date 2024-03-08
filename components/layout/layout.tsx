import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import { Global } from "../../tina/__generated__/types";

export const Layout = ({
  data = layoutData,
  children,
}: {
  rawData?: object;
  data?: Omit<Global, "id" | "_sys" | "_values">;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>Tina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={`min-h-screen flex flex-col`}>
          <Header data={data?.header} />
          <main>
            {children}
          </main>
          <Footer
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
    </>
  );
};
