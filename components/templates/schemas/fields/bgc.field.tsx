const colors = ["#78716c1a", "#7e22ce", "#ffa500"]

export const bgcField = {
  type: "string",
  name: "bgc",
  label: "Background Color",
  ui: {
    component: "color",
    colorFormat: "hex",
    colors,
  },
};
