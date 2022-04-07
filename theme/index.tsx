import { extendTheme } from "@chakra-ui/react";

const colors = {
  todo: {
    green: "hsla(118, 54%, 69%, 1)",
    purple: "hsla(248, 54%, 69%, 1)",
    orange: "hsla(10, 55%, 55%, 1)",
    grey: "hsla(0, 0%, 70%, 1)",
    light_grey: "hsla(0, 0%, 87%,1)",
    lighter_grey: "hsla(0, 0%, 96%, 1)",
    blue: "hsla(221, 61%, 61%, 1)",
    white: "hsla(0, 0%, 100%, 1)",
    off_white: "hsla(223, 37%, 96%, 1)",
  },
};

const styles = {
  global: {
    "*": {
      boxSizing: "border-box",
    },
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
      scrollBehavior: "smooth",
    },
    body: {
      fontSize: "1.4rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
};

const customTheme = extendTheme({ colors, styles });

export { customTheme };
