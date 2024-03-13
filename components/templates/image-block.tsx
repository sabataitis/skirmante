import React from "react";
import { Button, Buttons, Container, Img, Markdown } from "../shared";
import { PageBlocksImageBlock } from "../../tina/__generated__/types";

type Props = {
  data: PageBlocksImageBlock;
};

export const ImageBlock = (props: Props) => {
  const { data } = props;

console.info({props: props.data.text})


  return (
    <Container
      className={`relative sm:min-h-96 min-h-52`}
      size={data.image_block_size}
    >
      {data.image && (
        <Img
          className="object-contain"
          size="auto"
          src={data.image.src}
          radius="rounded-none"
          alt={data.image.alt}
        />
      )}
      {data.text && data.text?.children?.length && (
        <div
          className={`w-full text-white absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col gap-6 items-${data.alignment} justify-center p-6`}
        >
          <Markdown data={data} field="text" markdown={data.text} />
          {data.buttons && <Buttons buttons={data.buttons as Button[]} />}
        </div>
      )}
    </Container>
  );
};
