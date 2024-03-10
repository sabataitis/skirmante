import { Template } from "tinacms";

const schema: Template = {
  name: "hero",
  label: "Hero Template",
  ui: {
    defaultItem: {
      heading: "Here is the heading",
      subheading: "Here is the sub heading",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      label: "Heading",
      name: "heading",
      type: "rich-text",
    },
    {
      label: "Excerpt",
      name: "excerpt",
      type: "string",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
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

export default schema;
