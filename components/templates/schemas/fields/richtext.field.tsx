const colors = ["#78716c1a", "#7e22ce", "#ffa500"]

export const richtextField = {
  label: "Text",
  name: "text",
  type: "rich-text",
  templates: [
    {
      name: "SubstackNewsLetterSignUpForm",
      label: "Substack News Letter Sign Up Form",
      fields: [
        {
          label: "Width",
          name: "newsletter_width",
          type: "string",
        },
        {
          label: "Height",
          name: "newsletter_height",
          type: "string",
        },
        {
          label: "Border Color",
          type: "string",
          name: "newsletter_border_color",
          defaultvalue: "none",
          ui: {
            component: "color",
            colorFormat: "hex",
            colors,
          },
        },
      ],
    },
  ],
};
