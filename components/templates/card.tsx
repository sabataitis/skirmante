import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Button, Buttons, Container, Img, Markdown } from "../shared";
import { PageBlocksCard } from "../../tina/__generated__/types";

type Props = {
  data: PageBlocksCard;
  contentClassName?: string;
};

const textAlignments = {
    "left": "text-left",
    "center": "text-center",
    "right": "text-right",
}

const HeadingBlock = ({ props }: { props: PageBlocksCard }) => {
  const { card_heading, alignment } = props;

  if (!card_heading) return <div></div>;

  return (
    <div className={`${textAlignments[alignment]}`}>
      <h2 data-tina-field={tinaField(props, "card_heading")} className="text-3xl sm:text-4xl font-bold">
        {card_heading}
      </h2>
    </div>
  );
};

const ImageContentBlock = ({ props, className }: { props: PageBlocksCard, className?: string }) => {
  const { image, text, alignment, order } = props;

  const contentOrder = order ? "flex-wrap-reverse flex-row-reverse" : "";

  return (
    <div className={`flex flex-wrap justify-end ${className} ${contentOrder} gap-4`}>
      {image && image.src ? (
        <div className="px-10">
          <Img
            src={image.src}
            alt={image.alt}
            size={image.size}
            radius={image.radius}
          />
        </div>
      ) : (
        <div> </div>
      )}
      {text ? (
        <Markdown
          className={`flex-1 ${textAlignments[alignment]}`}
          data={props}
          markdown={text}
          field="text"
        />
      ) : (
        <div> </div>
      )}
    </div>
  );
};

const ButtonsBlock = ({ props }: { props: PageBlocksCard }) => {
  const { buttons, alignment } = props;

  if (!buttons) {
    return <div> </div>;
  }
  return (
    <div className={`flex justify-${alignment} items-end flex-1`}>
      <Buttons buttons={buttons as Button[]} />
    </div>
  );
};

export const Card = (props: Props) => {
  const { data, contentClassName = "" } = props;

  // 19 is 0.1 transparency in hex
  const bg = { backgroundColor: "transparent" };

  if(data.bgc) {
      bg.backgroundColor = data.bgc + "19";
  }

  return (
    <div className={`w-full h-full`} style={bg}>
      <Container className="flex flex-col gap-8" size="medium">
        <HeadingBlock props={data} />
        <ImageContentBlock className={contentClassName} props={data} />
        <ButtonsBlock props={data} />
      </Container>
    </div>
  );
};
