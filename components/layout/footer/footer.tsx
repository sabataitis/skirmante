import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import Link from "next/link";
import styles from "../../styles/footer.module.css";

export const Footer = ({ data }) => {
  return (
    <footer className="mt-6 bg-purple-500 text-white">
      <Container className="flex flex-col gap-4">
        <div className="flex sm:flex-row flex-col gap-4">
          {data.socials && data.socials.facebook && (
            <a href={data.socials.facebook} target="_blank">
              <FaFacebookF size="24" />
            </a>
          )}
          {data.socials && data.socials.twitter && (
            <a href={data.socials.twitter} target="_blank">
              <FaTwitter size="24" />
            </a>
          )}
          {data.socials && data.socials.instagram && (
            <a href={data.socials.instagram} target="_blank">
              <AiFillInstagram size="24" />
            </a>
          )}
          {data.socials && data.socials.linkedin && (
            <a href={data.socials.linkedin} target="_blank">
              <FaLinkedin size="24" />
            </a>
          )}
        </div>
        <div className="flex sm:flex-row flex-col gap-4">
          {data.references &&
            data.references.map(function (ref, index) {
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
