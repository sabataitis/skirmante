import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Button, Buttons, Container, Img, Markdown } from "../shared";
import { PageBlocksCard } from "../../tina/__generated__/types";
import styles from './styles/card.module.css'

type Props = {
  data: PageBlocksCard;
  contentClassName?: string;
};

export const Card = (props: Props) => {
  const { data, contentClassName = "" } = props;

  const bg = { backgroundColor: data.bgc + "19" || "none" };

  return (
    <div className={`w-full h-full`} style={bg}>
      <Container
        className={`${styles.card} gap-8 justify-items-${data.alignment}`}
        size="medium"
      >
        {/* Heading Block */}
        {data.card_heading && (
          <h2
            data-tina-field={tinaField(data, "card_heading")}
            className={`row-span-1 text-3xl sm:text-4xl font-bold text-${data.alignment}`}
          >
            {data.card_heading}
          </h2>
        )}

        {/* Image + Content Block */}
        <div className={`${contentClassName} grid sm:grid-flow-col row-span-4 gap-4`}>
          {data.image && (
            <div className={`${data.image.order} flex justify-center px-10`}>
              <Img
                className={`${data.image.radius}`}
                src={data.image.src}
                alt={data.image.alt}
                size={data.image.size}
              />
            </div>
          )}
          <Markdown
            className={`text-${data.alignment}`}
            data={data}
            markdown={data.text}
            field="text"
          />
        </div>

        {/* Buttons Block */}
        <div className={`row-span-1 flex justify-${data.alignment}`}>
          {data.buttons && <Buttons buttons={data.buttons as Button[]} />}
        </div>
      </Container>
    </div>
  );
};
