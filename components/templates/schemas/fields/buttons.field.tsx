export const buttonsField = {
  label: "Buttons",
  name: "buttons",
  type: "object",
  list: true,
  ui: {
    defaultItem: {
      label: "Button Label",
      type: "primary",
      link: "/",
    },
    itemProps: (item) => ({ label: item.label }),
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Type",
      name: "type",
      type: "string",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
      ],
    },
    {
      label: "Link",
      name: "link",
      type: "string",
    },
  ],
}
