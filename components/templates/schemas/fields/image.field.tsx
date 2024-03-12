export const imageField = {
  type: "object",
  label: "Image",
  name: "image",
  fields: [
    {
      name: "src",
      label: "Image Source",
      type: "image",
      defaultValue: "/images/index.jpg"
    },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
      defaultValue: "image alt"
    },
    {
      label: "Size",
      name: "size",
      type: "string",
      defaultValue: "medium",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
        { label: "Extra Large", value: "extraLarge" },
      ],
    },
    {
      name: "radius",
      label: "Radius",
      type: "string",
      defaultValue: "rounded-none",
      options: [
        { label: "Full", value: "rounded-full" },
        { label: "Square", value: "rounded-xl" },
        { label: "None", value: "rounded-none" },
      ],
    },
  ],
};
