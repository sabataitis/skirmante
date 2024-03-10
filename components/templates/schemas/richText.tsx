export const richText = {
  label: "Text",
  name: "text",
  type: "rich-text",
  templates: [
    {
      name: "colored",
      label: "Colored Text",
      type: "string",
      ui: {
        component: "color",
        colorFormat: "hex",
        colors: ["#78716c1a","#7e22ce", "#ffa500", "#ff0000", "#00ff00", "#0000ff"],
        widget: "sketch",
      },
    },
  ],
};
