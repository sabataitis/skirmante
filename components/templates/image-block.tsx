import React from "react";
import { Button, Buttons, Container, Img, Markdown } from "../shared";
import { PageBlocksImageBlock } from "../../tina/__generated__/types";

type Props = {
  data: PageBlocksImageBlock;
};

const alignments = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

export const ImageBlock = (props: Props) => {
  const { data } = props;

  const hasText = data.text && data.text?.children?.length > 0;

  return (
    <Container
      className={`relative sm:min-h-96 min-h-52`}
      size={data.image_block_size}
    >
      {data.image && (
        <Img
          src={data.image.src}
          alt={data.image.alt}
          className="object-contain"
          size="auto"
          radius="rounded-none"
        />
      )}
      {hasText && (
        <div
          className={`w-full text-white absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col gap-6 ${
            alignments[data.alignment]
          } justify-center p-6`}
        >
          <Markdown data={data} field="text" markdown={data.text} />
          {data.buttons && <Buttons buttons={data.buttons as Button[]} />}
        </div>
      )}
    </Container>
  );
};
