import { PageBlocksThreeColumnTemplate, PageBlocksThreeColumnTemplateBlocks } from "../../tina/__generated__/types";
import { Container } from "../util/container";
import { Template } from "tinacms";
import { CardTemplate, cardTemplateBlockSchema } from "./card-template";
import { tinaField } from "tinacms/dist/react";
import styles from "../styles/three-column-template.module.css";

export const ThreeColumnTemplate = ({
  data,
}: {
  data: PageBlocksThreeColumnTemplate;
}) => {
  return (
    <Container
      size="medium"
      className={`${styles.columns} mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6`}
    >
      {data.blocks
        ? data.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </Container>
  );
};

const Block = (block: PageBlocksThreeColumnTemplateBlocks) => {
  switch (block.__typename) {
    case "PageBlocksThreeColumnTemplateBlocksCardTemplate":
      return (
        <CardTemplate
          className="text-center flex flex-col items-center justify-between"
          actionsClassName="flex flex-col my-4"
          data={block as any}
        />
      );
    default:
      return null;
  }
};

export const threeColumnTemplateSchema: Template = {
  name: "threeColumnTemplate",
  label: "Three Column Template",
  fields: [
    {
      type: "object",
      label: "Blocks",
      name: "blocks",
      list: true,
      ui: { 
          visualSelector: true,
      },
      templates: [cardTemplateBlockSchema],
    },
  ],
};
