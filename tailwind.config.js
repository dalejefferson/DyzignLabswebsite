module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "on-primary-container": "#567400",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#c4c8c1",
        "inverse-on-surface": "#f2f0f0",
        "surface": "#fbf9f8",
        "on-primary-fixed": "#151f00",
        "tertiary-container": "#eaede6",
        "secondary-fixed-dim": "#c6c6c6",
        "error": "#ba1a1a",
        "tertiary-fixed": "#e0e3dd",
        "inverse-surface": "#303031",
        "outline": "#747a62",
        "on-secondary-fixed": "#1b1b1b",
        "on-background": "#1b1c1c",
        "surface-container": "#efeded",
        "primary-fixed-dim": "#a3d800",
        "tertiary": "#5b5f5a",
        "background": "#fbf9f8",
        "on-tertiary-fixed": "#191d19",
        "primary-fixed": "#bef531",
        "on-secondary-container": "#646464",
        "on-tertiary-container": "#676b66",
        "secondary": "#5e5e5e",
        "surface-dim": "#dbdad9",
        "on-secondary": "#ffffff",
        "outline-variant": "#c3c9ae",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#474747",
        "surface-container-low": "#f5f3f3",
        "on-surface-variant": "#434934",
        "secondary-container": "#e2e2e2",
        "primary-container": "#c7ff3c",
        "surface-container-high": "#e9e8e7",
        "on-primary-fixed-variant": "#394e00",
        "surface-container-highest": "#e4e2e2",
        "surface-variant": "#e4e2e2",
        "on-primary": "#ffffff",
        "primary": "#4c6700",
        "surface-tint": "#4c6700",
        "inverse-primary": "#a3d800",
        "surface-bright": "#fbf9f8",
        "on-tertiary-fixed-variant": "#444843",
        "secondary-fixed": "#e2e2e2",
        "on-surface": "#1b1c1c"
      },
      borderRadius: {
        DEFAULT: "5px",
        lg: "5px",
        xl: "5px",
        full: "5px"
      },
      spacing: {
        gutter: "24px",
        "base-unit": "8px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "container-max": "1440px"
      },
      fontFamily: {
        "headline-xl": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "body-lg": ["Montserrat"],
        "headline-md": ["Space Grotesk"],
        "body-md": ["Montserrat"],
        "label-bold": ["Space Grotesk"],
        headline: ["Space Grotesk"],
        body: ["Montserrat"]
      },
      fontSize: {
        "headline-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "label-bold": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "700" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
