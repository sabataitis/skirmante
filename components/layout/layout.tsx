import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Theme } from "./theme";
import layoutData from "../../content/global/index.json";
import { Global } from "../../tina/__generated__/types";

export const Layout = ({
  rawData = {},
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
      <Theme data={data?.theme}>
        <div className={`min-h-screen flex flex-col`}>
          <Header data={data?.header} />
          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
            {children}
          </div>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};
