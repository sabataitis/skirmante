import type { Collection } from "tinacms";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";
import { featureBlockSchema } from "../../components/blocks/features";
import { heroTemplateSchema } from "../../components/blocks/hero-template";
import { cardTemplateBlockSchema } from "../../components/blocks/card-template";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      // if (document._sys.filename === "about") {
      //   return `/about`;
      // }
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
        heroTemplateSchema,
        cardTemplateBlockSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        featureBlockSchema,
        testimonialBlockSchema,
      ],
    },
  ],
};

export default Page;
