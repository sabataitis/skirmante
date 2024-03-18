import { tinaField } from "tinacms/dist/react";
import styles from "./styles/hero.module.css";

import {
  Button,
  Buttons,
  Container,
  Markdown,
  Img,
} from "../shared";
import { PageBlocksHero } from "../../tina/__generated__/types";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const buttons = data.buttons as Button[];

  return (
    <Container
      className={`${styles.hero} mx-auto grid grid-cols-1 lg:grid-cols-5 content-center items-center gap-6`}
    >
      <div className="lg:col-span-2">
        {data.image && (
          <div
            className="flex items-center justify-center"
            data-tina-field={tinaField(data.image, "src")}
          >
            <Img
              className={`bg-secondary sm:p-8 p-4`}
              src={data.image.src}
              alt={data.image.alt}
              loading="eager"
              decoding="auto"
              radius={data.image.radius}
              size={data.image.size}
            />
          </div>
        )}
      </div>
      <div className="lg:col-span-3 flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-4">
          {data.heading && (
            <Markdown
              data={data}
              field="text"
              markdown={data.heading}
              components={{
                bold: (props) => <span className="text-primary" {...props} />,
              }}
            />
          )}
          {data.excerpt && (
            <h2 className="text-md sm:text-2xl font-extralight">
              {data.excerpt}
            </h2>
          )}
        </div>
        {data.text && ( <Markdown data={data} field="text" markdown={data.text} />)}
        {data.buttons && <Buttons buttons={buttons} />}
      </div>
    </Container>
  );
};
