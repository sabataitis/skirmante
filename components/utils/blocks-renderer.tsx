import type { Page, PageBlocks } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Columns } from "../templates/columns";
import { Card } from "../templates/card";
import { Hero } from "../templates/hero";
import { ImageBlock } from "../templates/image-block";
import { SubstackArticles } from "../templates/substack-articles";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <section className="flex flex-col gap-4">
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </section>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksColumns":
      return <Columns data={block} />;
    case "PageBlocksCard":
      return <Card layout={{content: "grid grid-flow-col auto-cols-auto"}} data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksImageBlock":
      return <ImageBlock data={block} />;
      case "PageBlocksSubstack_articles":
          return <SubstackArticles/>
    default:
      return null;
  }
};
