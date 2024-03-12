import { Template } from "tinacms";

import { alignmentField, buttonsField, richtextField } from "./fields";

const schema: Template = {
  name: "imageBlock",
  label: "Image Block Template",
  ui: {
    itemProps: (item) => {
      return {
        label: item?.heading,
      };
    },
  },
  fields: [
    {
      label: "Block Size",
      name: "image_block_size",
      type: "string",
      defaultValue: "medium",
      options: [
        { label: "Full", value: "full" },
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
    },
    {
      type: "object",
      label: "Background Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
          defaultValue: "/images/index.jpg",
        },
      ],
    },
    richtextField as any,
    alignmentField,
    buttonsField,
  ],
};

export default schema;
