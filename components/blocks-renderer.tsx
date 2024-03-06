import type { Page, PageBlocks } from "../tina/__generated__/types";
import { Features } from "./blocks/features";
import { HeroTemplate } from "./blocks/hero-template";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";
import { CardTemplate } from "./blocks/card-template";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksCardTemplate":
      return <CardTemplate data={block} />;
    case "PageBlocksHeroTemplate":
      return <HeroTemplate data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    default:
      return null;
  }
};
