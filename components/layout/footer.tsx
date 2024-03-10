import React from "react";
import Link from "next/link";

import { Container, Socials } from "../shared";

export const Footer = ({ data }) => {
  return (
    <footer className="mt-6 bg-purple-500 text-white">
      <Container className="flex flex-col gap-4">
        <Socials socials={data.socials} />
        <div className="flex sm:flex-row flex-col gap-4">
          {data.references &&
            data.references.map((ref, index) => {
              return (
                <Link key={index} href={ref.href ? ref.href : "/"}>
                  {ref.label}
                </Link>
              );
            })}
        </div>
      </Container>
    </footer>
  );
};
