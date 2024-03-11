import React from "react";
import { tinaField } from "tinacms/dist/react";
import { AppImage, Button, Buttons, Container, Markdown } from "../shared";
import { PageBlocksCard } from "../../tina/__generated__/types";
import styles from "./styles/card.module.css";

export const Card = ({
  className = "",
  actionsClassName = "",
  data,
}: {
  className?: string;
  actionsClassName?: string;
  data: PageBlocksCard;
}) => {
  // 19 is for 0.1 transparency
  const bg = { backgroundColor: data.bgc + "19" || "none" };

  const contentBlockAlignment = `flex gap-10 sm:flex-row flex-col items-center`;
  const blockAlignment = `flex flex-col items-${data.alignment} || 'start'`;

  return (
    <div className={`${styles.card} my-6`} style={bg}>
      <Container
        className={`${className} ${blockAlignment} mx-auto`}
        size="medium"
      >
        {data.card_heading && (
          <h2
            data-tina-field={tinaField(data, "card_heading")}
            className="text-2xl sm:text-4xl font-bold mb-6"
          >
            {data.card_heading}
          </h2>
        )}
        <div className={`${contentBlockAlignment}`}>
          {data.image && (
            <div className="flex justify-center p-6 sm:p-10">
              <AppImage
              className={`${data.image.roundness}`}
                data={{
                  src: data.image.src,
                  alt: data.image.alt,
                  height: data.image.height,
                  width: data.image.width,
                }}
              />
            </div>
          )}
          <Markdown
            className={`text-${data.alignment || "left"}`}
            data={data}
            markdown={data.text}
            field="text"
          />
        </div>

        {data.buttons && (
          <Buttons
            className={actionsClassName}
            buttons={data.buttons as Button[]}
          />
        )}
      </Container>
    </div>
  );
};
