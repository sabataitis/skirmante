import { Template } from "tinacms";

const schema: Template = {
  name: "card",
  label: "Card Template",
  ui: {
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
      label: "Buttons",
      name: "buttons",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Button Label",
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

export default schema;
