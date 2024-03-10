import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksCardTemplate } from "../../tina/__generated__/types";
import { Button, Buttons, Container } from "../shared";

export const Card = ({
  className = "",
  actionsClassName = "",
  data,
}: {
  className?: string;
  actionsClassName?: string;
  data: PageBlocksCardTemplate;
}) => {
  return (
    <Container
      className={`${className} mx-auto h-full rounded-xl ring ring-card bg-card`}
      size="medium"
    >
      {data.text && (
        <div
          data-tina-field={tinaField(data, "text")}
          className="sm:prose-2xl prose-xl"
        >
          <TinaMarkdown content={data.text} />
        </div>
      )}
      {data.actions && (
        <Buttons
          className={actionsClassName}
          buttons={data.actions as Button[]}
        />
      )}
    </Container>
  );
};

export const cardTemplateBlockSchema: Template = {
  name: "cardTemplate",
  label: "Card Template",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      heading: "Heading",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    },
    itemProps: (item) => {
      return {
        label: item?.label,
      };
    },
  },
  fields: [
    {
      type: "string",
      label: "Label",
      name: "label",
    },
    {
      type: "rich-text",
      label: "Text",
      name: "text",
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
  ],
};
