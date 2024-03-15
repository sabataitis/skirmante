import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Button, Buttons, Container, Img, Markdown } from "../shared";
import {
  PageBlocksCard,
  PageBlocksColumnsBlocksCard,
} from "../../tina/__generated__/types";
import styles from "./styles/card.module.css";

type Props = {
  data: PageBlocksCard | PageBlocksColumnsBlocksCard;
  layout: {
    content?: string;
    heading?: string;
    buttons?: string;
  };
};

const textAlignments = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const HeadingBlock = ({
  props,
  className = "",
}: {
  props: PageBlocksCard | PageBlocksColumnsBlocksCard;
  className?: string;
}) => {
  if (!props.card_heading) return <div></div>;

  return (
    <div className={className}>
      <h2
        data-tina-field={tinaField(props, "card_heading")}
        className="text-3xl sm:text-4xl font-bold"
      >
        {props.card_heading}
      </h2>
    </div>
  );
};

const ImageContentBlock = ({
  props,
  className = "",
}: {
  props: PageBlocksCard | PageBlocksColumnsBlocksCard;
  className?: string;
}) => {
  const { image, text, alignment, order } = props;

  const ordering = order ? "order-last" : "order-first";

  return (
    <div className={`gap-4 ${className}`}>
      {image && image.src ? (
        <div className={`${ordering} m-auto px-10`}>
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

const ButtonsBlock = ({
  props,
  className = "",
}: {
  props: PageBlocksCard | PageBlocksColumnsBlocksCard;
  className?: string;
}) => {
  const { buttons, alignment } = props;

  const align = `justify-${alignment}`;

  if (!buttons) {
    return <div> </div>;
  }
  return (
    <div className={`${className} ${align} flex`}>
      <Buttons buttons={buttons as Button[]} />
    </div>
  );
};

export const Card = (props: Props) => {
  const { data, layout = {} } = props;

  // 19 is 0.1 transparency in hex
  const bg = { backgroundColor: "transparent" };

  if (data.bgc) {
    bg.backgroundColor = data.bgc + "19";
  }

  const alignment = textAlignments[data.alignment];

  return (
    <div className="h-full" style={bg}>
      <Container className={`${styles.card}`} size="medium">
        <HeadingBlock
          className={`${layout.heading} ${alignment}`}
          props={data}
        />
        <ImageContentBlock className={layout.content} props={data} />
        <ButtonsBlock className={layout.buttons} props={data} />
      </Container>
    </div>
  );
};
