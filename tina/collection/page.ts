import type { Collection } from "tinacms";
// import { testimonialBlockSchema } from "../../components/blocks/testimonial";
// import { featureBlockSchema } from "../../components/blocks/features";

import  HeroSchema  from "../../components/templates/schemas/hero.schema";
import  CardSchema from "../../components/templates/schemas/card.schema";
import  ColumnsSchema from "../../components/templates/schemas/columns.schema";
import  ImageBlockSchema from "../../components/templates/schemas/image-block.schema";
import  SubstackArticlesSchema from "../../components/templates/schemas/substack-articles.schema";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "index") {
        return `/`;
      }
      else if (document._sys.filename === "about") {
        return `/about`;
      }
      else if (document._sys.filename === "services") {
        return `/services`;
      }
      else if (document._sys.filename === "formula") {
        return `/formula`;
      }
      else if (document._sys.filename === "about-coaching") {
        return `/about-coaching`;
      }
      else if (document._sys.filename === "privacy") {
        return `/privacy`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "Page Title",
      name: "title",
      required: true,
      isTitle: true
    },
    {
      type: "string",
      label: "[SEO] Title",
      name: "seo_title",
    },
    {
      type: "string",
      label: "[SEO] Description",
      name: "seo_description",
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
        ImageBlockSchema,
        SubstackArticlesSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // featureBlockSchema,
        // testimonialBlockSchema,
      ],
    },
  ],
};

export default Page;
