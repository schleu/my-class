// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
      extend: {
        screens: {
          xs: "426px",
          cut: "1440px",
          '1/3': "33%",
        },
        colors: {
          "dark-900": "333333",
          "dark-800": "333333",
          "dark-700": "333333",
          "dark-600": "333333",
          "dark-500": "333333",
          "dark-400": "333333",
          "dark-300": "333333",
          "dark-200": "333333",
          "dark-100": "333333",
          primary: "#FFC310",
          danger: "#F12C4C",
          success: "#00C851",
          warning: "#ffbb33",
          info: "#33B5E5",
          "light-900": "#121212",
          "light-800": "#1A1A1A",
          "light-700": "#",
          "light-600": "",
          "light-500": "#262626",
          "light-400": "#333333",
          "light-300": "#757575",
          "light-200": "#A7A7A7",
          "light-100": "#F9F9F9",
        },
        fontFamily: {
          Poppins: ["Poppins", "sans-serif"],
          BeauRivage: ["Beau Rivage", "sans-serif"],
        },
        animation:{},
        keyframes:{}
      },
    },
  };
  