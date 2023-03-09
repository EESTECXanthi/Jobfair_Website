const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    colors: {
      jobfair: {
        "50": "#f1e9ea",
        "100": "#e4d2d5",
        "200": "#d6bcc0",
        "300": "#c8a6ab",
        "400": "#bb9097",
        "500": "#ad7982",
        "600": "#9f636d",
        "700": "#914d58",
        "800": "#843643",
        "900": "#76202e"
        }
    },
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;