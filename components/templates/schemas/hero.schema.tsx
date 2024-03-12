import { Template } from "tinacms";
import { buttonsField } from "./fields";
import { imageField } from "./fields/image.field";

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
    buttonsField as any,
    imageField
  ],
};

export default schema;
