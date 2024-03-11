import { tinaField } from "tinacms/dist/react";
import styles from "./styles/hero.module.css";

import { Button, Buttons, Container, Markdown, AppImage } from "../shared";
import { PageBlocksHero } from "../../tina/__generated__/types";

export const Img = ({ data }: { data: PageBlocksHero }) => {
  const payload = {
    src: data?.image?.src || "",
    alt: data?.image?.alt || "",
    width: 600,
    height: 600,
  };

  return (
    data.image && (
      <div
        className="flex items-center justify-center"
        data-tina-field={tinaField(data.image, "src")}
      >
        <AppImage
          className="bg-orange-500 rounded-full border rounded-full lg:p-8 p-4 overflow-hidden shadow-lg"
          data={payload}
        />
      </div>
    )
  );
};

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const buttons = data.buttons as Button[];

  return (
    <Container
      className={`${styles.hero} mx-auto grid grid-cols-1 lg:grid-cols-5 content-center items-center gap-6`}
    >
      <div className="lg:col-span-2">
        <Img data={data} />
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
            <h3 className="text-md sm:text-2xl font-extralight">
              {data.excerpt}
            </h3>
          )}
        </div>
        {data.text && (
          <Markdown data={data} field="text" markdown={data.text} />
        )}
        {data.buttons && <Buttons buttons={buttons} />}
      </div>
    </Container>
  );
};
