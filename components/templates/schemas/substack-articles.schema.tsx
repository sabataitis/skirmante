import { Template } from "tinacms";

const schema: Template = {
  name: "substack_articles",
  label: "Substack Articles Template",
  fields: [
    {
      label: "Section Heading",
      name: "substack_articles_heading",
      type: "string",
    },
    {
      label: "Article Count",
      name: "substack_articles_count",
      type: "number",
    },
  ],
};

export default schema;
