import React from "react";
import { Buttons, Container, Img, Markdown } from "../shared";
import { PageBlocksImageBlock } from "../../tina/__generated__/types";

import styles from "./styles/image-block.module.css";

type Props = {
  data: PageBlocksImageBlock;
  className?: string;
};

export const ImageBlock = (props: Props) => {
  const { data, className = "" } = props;

  return (
      <Container className={`relative sm:h-96 h-52`} size={data.image_block_size}>
        {data.image && (
          <Img
            className="object-contain"
            size="auto"
            src={data.image.src}
            alt="alt"
          />
        )}
        <div className={`w-full text-white absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col gap-6 items-${data.alignment} justify-center p-6`}>
          {data.text && (
            <Markdown data={data} field="text" markdown={data.text} />
          )}
          {data.buttons && <Buttons buttons={data.buttons} />}
        </div>
      </Container>
  );
};
