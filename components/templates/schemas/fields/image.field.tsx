export const imageField = {
  type: "object",
  label: "Image",
  name: "image",
  fields: [
    {
      name: "src",
      label: "Image Source",
      type: "image",
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
    },
    {
      name: "width",
      label: "Image Width (px)",
      type: "number",
    },
    {
      name: "height",
      label: "Image Height (px)",
      type: "number",
    },
    {
      label: "Roundness",
      name: "roundness",
      type: "string",
      options: [
        { label: "Full", value: "rounded-full" },
        { label: "Square", value: "rounded-xl" },
        { label: "None", value: "rounded-none" },
      ],
    },
    {
      label: "Order",
      name: "order",
      type: "string",
      options: [
        { label: "Start", value: "1" },
        { label: "End", value: "2" },
      ],
    },
  ],
};
