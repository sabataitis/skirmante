import { PageBlocksHeroTemplate } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { Container } from "../util/container";
import AppImage from "../util/image";
import { Action, Actions } from "../util/actions";
import { Heading } from "../util/heading";
import { Template } from "tinacms";
import styles from "../styles/hero-template.module.css";

export const Txt = ({ data }: { data: PageBlocksHeroTemplate }) => {
  return (
    data.text && (
      <div
        data-tina-field={tinaField(data, "text")}
        className="sm:text-2xl text-lg sm:leading-10"
      >
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
  const actions = data.actions as Action[];

  return (
    <Container
      className={`${styles.heroScreen} mx-auto grid grid-cols-1 lg:grid-cols-5 content-center items-center gap-6`}
    >
      <div className="lg:col-span-2">
        <Img data={data} />
      </div>
      <div className="lg:col-span-3 flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4">
          {data.heading && (
            <Heading
              size="xl"
              className="font-bold uppercase"
              data={data}
              name="heading"
            >
              {data.heading}
            </Heading>
          )}
          {data.subheading && (
            <Heading
              size="medium"
              className="font-extralight"
              data={data}
              name="subheading"
            >
              {data.subheading}
            </Heading>
          )}
        </div>
        <Txt data={data} />
        {data.actions && <Actions actions={actions} />}
      </div>
    </Container>
  );
};

export const heroTemplateSchema: Template = {
  name: "heroTemplate",
  label: "Hero Template",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "Here is the heading",
      subheading: "Here is the sub heading",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "string",
      label: "Sub Heading",
      name: "subheading",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          style: "primary",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
