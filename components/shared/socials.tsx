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
  socials: Record<MEDIA_SITE, string | null>;
}) => {
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      {socials && socials.facebook && (
        <a href={socials.facebook} target="_blank">
          <FaFacebook size="24" />
        </a>
      )}
      {socials && socials.twitter && (
        <a href={socials.twitter} target="_blank">
          <FaTwitter size="24" />
        </a>
      )}
      {socials && socials.instagram && (
        <a href={socials.instagram} target="_blank">
          <AiFillInstagram size="24" />
        </a>
      )}
      {socials && socials.linkedin && (
        <a href={socials.linkedin} target="_blank">
          <FaLinkedin size="24" />
        </a>
      )}
    </div>
  );
};
