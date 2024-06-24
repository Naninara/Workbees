/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: "Figtree",
      },
      keyframes: {
        mobile: {
          "0%": {
            transform: "translateY(25px)",
          },

          "100%": {
            transform: "translateY(-25px)",
          },
        },
        hero: {
          "0%": {
            transform: "translateY(-350px)",
          },
          "25%": {
            transform: "translateX(500px)",
          },
          "50%": {
            transform: "translateY(350px)",
          },
          "100%": {
            transform: "translateX(500px)",
          },
        },
      },
      animation: {
        mobile: "mobile 3s  infinite alternate-reverse",
        hero: "hero 6s infinite alternate",
      },
      backgroundColor: {
        anime:
          "linear-gradient(180deg, rgba(36, 0, 255, 0.4) 0%, rgba(0, 255, 209, 0.4) 100%)",
      },
      blur: "100px",
    },
  },
  plugins: [],
};
