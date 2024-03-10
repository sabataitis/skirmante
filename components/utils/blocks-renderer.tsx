import type { Page, PageBlocks } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Columns } from "../templates/columns";
import { Card } from "../templates/card";
import { Hero } from "../templates/hero";

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
    case "PageBlocksColumns":
      return <Columns data={block} />;
    case "PageBlocksCard":
      return <Card data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    // case "PageBlocksFeatures":
    //   return <Features data={block} />;
    // case "PageBlocksTestimonial":
    //   return <Testimonial data={block} />;
    default:
      return null;
  }
};
