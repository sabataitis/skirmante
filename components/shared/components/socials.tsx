import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

enum MEDIA_SITE {
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
  LINKEDIN = "linkedin",
  TWITfER = "twitter",
}

export const Socials = ({
  socials,
}: {
  socials: Partial<Record<MEDIA_SITE, string | null>>;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {socials && socials.facebook && (
        <a aria-label="Facebook Link" href={socials.facebook} target="_blank">
          <FaFacebook size="24" />
        </a>
      )}
      {socials && socials.twitter && (
        <a aria-label="Twitter Link" href={socials.twitter} target="_blank">
          <FaTwitter size="24" />
        </a>
      )}
      {socials && socials.instagram && (
        <a aria-label="Instagram Link" href={socials.instagram} target="_blank">
          <AiFillInstagram size="24" />
        </a>
      )}
      {socials && socials.linkedin && (
        <a aria-label="Linkedin Link" href={socials.linkedin} target="_blank">
          <FaLinkedin size="24" />
        </a>
      )}
    </div>
  );
};
