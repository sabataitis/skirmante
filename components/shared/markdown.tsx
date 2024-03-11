import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const defaults = {
  h1: (props) => {
    return <h1 className="font-bold text-3xl sm:text-6xl" {...props} />;
  },
  h2: (props) => {
    return <h2 className="font-bold text-2xl sm:text-4xl" {...props} />;
  },
  h3: (props) => {
    return <h3 className="font-bold text-lg sm:text-2xl" {...props} />;
  },
  h4: (props) => {
    return <h4 className="font-bold text-md sm:text-xl" {...props} />;
  },
  h5: (props) => {
    return <h5 className="text-md sm:text-lg" {...props} />;
  },
  p: (props) => {
    return <p className="text-lg sm:text-2xl sm:leading-10 my-2" {...props} />;
  },
  a: (props) => {
    return <a className="text-secondary font-bold underline text-lg sm:text-2xl" {...props} />;
  },
  ul: (props) => {
    return <ul className="inline-block list-disc p-4" {...props} />;
  },
  li: (props) => {
    return <li className="pl-4 text-lg sm:text-2xl sm:leading-10 my-2" {...props} />;
  },
};

export const Markdown = ({
  className = "",
  data,
  field,
  components = {},
  markdown,
}) => {
  const markdownComponents = { ...defaults, ...components };

  return (
    <div data-tina-field={tinaField(data, field)} className={`${className}`}>
      <TinaMarkdown content={markdown} components={markdownComponents} />
    </div>
  );
};
