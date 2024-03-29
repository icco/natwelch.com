import { Nord } from "@icco/react-common";
import { toTheme } from "@theme-ui/typography";
import { merge } from "lodash";
import fairyGates from "typography-theme-fairy-gates";

const typography = toTheme(fairyGates);
const root = {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: true,
    printColorModeName: "print",
  },

  colors: {
    text: Nord.nord6,
    background: Nord.nord0,
    muted: Nord.nord1,
    primary: Nord.nord1,
    secondary: Nord.nord4,
    link: Nord.nord9,
    border: Nord.nord4,
    modes: {
      print: {
        background: "#fff",
        text: "#000",
        primary: Nord.nord1,
        secondary: Nord.nord4,
        link: Nord.nord10,
        border: "#000",
      },
    },
  },

  styles: {
    root: {
      color: "text",
      bg: "background",
    },
    footer: {
      fontSize: 1,
    },
  },

  buttons: {
    primary: {
      cursor: "pointer",
    },
  },

  "@media print": {
    fontSize: 1,
    p: 0,
    width: "100%",
  },
};

const theme = merge(typography, root);

export default theme;
