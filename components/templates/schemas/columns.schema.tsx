import { Template } from "tinacms";
import card from "./card.schema";

const schema: Template = {
  name: "columns",
  label: "Columns Template",
  fields: [
    {
      type: "object",
      label: "Blocks",
      name: "blocks",
      list: true,
      ui: { visualSelector: true },
      templates: [card],
    },
  ],
};

export default schema;
