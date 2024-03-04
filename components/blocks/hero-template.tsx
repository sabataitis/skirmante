import { PageBlocksHeroTemplate } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Container } from "../util/container";
import AppImage from "../util/image";
import { Actions } from "../util/actions";

const Heading = ({ data }: { data: PageBlocksHeroTemplate }) => {
  return (
    data.heading && (
      <h1
        className="text-3xl text-center sm:text-left font-bold md:text-6xl uppercase"
        data-tina-field={tinaField(data, "heading")}
      >
        {data.heading}
      </h1>
    )
  );
};

const SubHeading = ({ data }: { data: PageBlocksHeroTemplate }) => {
  return (
    data.subheading && (
      <h2
        className="text-md sm:text-left text-center sm:text-2xl font-extralight"
        data-tina-field={tinaField(data, "subheading")}
      >
        {data.subheading}
      </h2>
    )
  );
};

export const Txt = ({ data }: { data: PageBlocksHeroTemplate }) => {
  return (
    data.text && (
      <div data-tina-field={tinaField(data, "text")} className="prose-lg">
        <TinaMarkdown content={data.text} />
      </div>
    )
  );
};

export const Img = ({ data }: { data: PageBlocksHeroTemplate }) => {
  const payload = {
    src: data.image.src,
    alt: data.image.alt,
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

export const HeroTemplate = ({ data }: { data: PageBlocksHeroTemplate }) => {
  return (
    <Container size="large">
      <section className="grid grid-cols-1 lg:grid-cols-5 content-center items-center gap-4">
        <div className="lg:col-span-2">
          <Img data={data} />
        </div>
        <div className="lg:col-span-3 flex flex-col gap-6 justify-center">
          <div>
            <Heading data={data} />
            <SubHeading data={data} />
          </div>
          <Txt data={data} />
          {data.actions && (
            <Actions actions={data.actions} />
          )}
        </div>
      </section>
    </Container>
  );
};
