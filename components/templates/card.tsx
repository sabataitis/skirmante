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
  flow: "column" | "row";
};

const flexAlignments = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const textAlignments = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
};

const HeadingBlock = ({ props }) => {
  if (!props.card_heading) return <div></div>;

  return (
    <div className={`${textAlignments[props.alignment]}`}>
      <h2
        data-tina-field={tinaField(props, "card_heading")}
        className="text-3xl sm:text-4xl font-bold"
      >
        {props.card_heading}
      </h2>
    </div>
  );
};

const ImageContentBlock = ({ props, flow = "row" }) => {
  const { image, text, order, alignment } = props;

  let containerClasses = "flex gap-4" + " " + flexAlignments[alignment] + " ";

  switch (flow) {
    case "row": {
      containerClasses += order
        ? "sm:flex-row-reverse flex-col-reverse"
        : "sm:flex-row flex-col";
      break;
    }
    case "column": {
      containerClasses += order ? "flex-col-reverse" : "flex-col";
      break;
    }
  }

  return (
    <div className={`${containerClasses}`}>
      {image?.src && (
        <div className="flex justify-center px-10">
          <Img
            src={image.src}
            alt={image.alt}
            size={image.size}
            radius={image.radius}
          />
        </div>
      )}
      {text && (
        <Markdown
          className={`flex-1 ${textAlignments[alignment]}`}
          data={props}
          markdown={text}
          field="text"
        />
      )}
    </div>
  );
};

const ButtonsBlock = ({ props }) => {
  const { buttons, alignment } = props;

  if (!buttons) {
    return null;
  }

  return (
    <div className={`flex flex-col ${flexAlignments[alignment]}`}>
      <Buttons buttons={buttons as Button[]} />
    </div>
  );
};

export const Card = (props: Props) => {
  const { data, flow = "row" } = props;

  // 19 is 0.1 transparency in hex
  const bg = { backgroundColor: "transparent" };

  if (data.bgc) {
    bg.backgroundColor = data.bgc + "19";
  }

  return (
    <div className="h-full" style={bg}>
      <Container className={`${styles.card}`} size="medium">
        <HeadingBlock props={data} />
        <ImageContentBlock flow={flow} props={data} />
        <ButtonsBlock props={data} />
      </Container>
    </div>
  );
};
