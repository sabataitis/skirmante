import { Template } from "tinacms";
import {
  alignmentField,
  bgcField,
  buttonsField,
  richtextField,
} from "./fields";
import { imageField } from "./fields/image.field";

const schema: Template = {
  name: "card",
  label: "Card Template",
  ui: {
    itemProps: (item) => {
      return {
        label: item?.heading,
      };
    },
  },
  fields: [
    {
      label: "Heading",
      name: "card_heading",
      type: "string",
    },
    richtextField as any,
    bgcField,
    alignmentField,
    buttonsField,
    imageField
  ],
};

export default schema;
