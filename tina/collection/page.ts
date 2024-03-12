import type { Collection } from "tinacms";
// import { testimonialBlockSchema } from "../../components/blocks/testimonial";
// import { featureBlockSchema } from "../../components/blocks/features";

import  HeroSchema  from "../../components/templates/schemas/hero.schema";
import  CardSchema from "../../components/templates/schemas/card.schema";
import  ColumnsSchema from "../../components/templates/schemas/columns.schema";
import  ImageBlockSchema from "../../components/templates/schemas/image-block.schema";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
        console.info({document})
      if (document._sys.filename === "index") {
        return `/`;
      }
      if (document._sys.filename === "services") {
        return `/services`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        HeroSchema,
        CardSchema,
        ColumnsSchema,
        ImageBlockSchema
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // featureBlockSchema,
        // testimonialBlockSchema,
      ],
    },
  ],
};

export default Page;
