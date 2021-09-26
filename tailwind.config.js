module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         raleway: ["Raleway", "sans-serif"],
      },
      extend: {
         colors: {
            primary: "#2ec74c",
            secondary: "#222",
            module: {
               active: "#374151",
               hover: "#1f2937",
            },
            link: {
               active: "#f0f5fc",
               DEFAULT: "#9ca3af",
               hover: "#d1d5db",
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
