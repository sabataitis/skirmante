import { tinaField } from "tinacms/dist/react";
import { Container } from "../shared";
import { Card } from "./card";
import { PageBlocksColumns } from "../../tina/__generated__/types";

export const Columns = ({ data }: { data: PageBlocksColumns }) => {
  return (
    <Container
      size="large"
      className="grid sm:grid-flow-col auto-cols-fr grid-cols-1 gap-6"
    >
      {data.blocks
        ? data.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Card data={block} flow="column" />
              </div>
            );
          })
        : null}
    </Container>
  );
};
