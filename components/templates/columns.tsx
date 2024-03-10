import { PageBlocksThreeColumnTemplate, PageBlocksThreeColumnTemplateBlocks } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import styles from "./styles/columns.module.css";
import { Container } from "../shared";
import { Card } from "./card";

export const Columns = ({
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
        <Card
          className="text-center flex flex-col items-center justify-between"
          actionsClassName="flex flex-col my-4"
          data={block as any}
        />
      );
    default:
      return null;
  }
};

