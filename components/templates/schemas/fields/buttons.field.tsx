export const buttonsField = {
  label: "Buttons",
  name: "buttons",
  type: "object",
  list: true,
  ui: { itemProps: (item) => ({ label: item.label }) },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
      defaultValue: "Button Label",
    },
    {
      label: "Type",
      name: "type",
      type: "string",
      defaultValue: "primary",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
      ],
    },
    {
      label: "Link",
      name: "link",
      type: "string",
      defaultValue: "",
    },
  ],
};
