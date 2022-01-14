module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        host: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx930dNJIyGsJJrJd6MvPv63xtIe9FoVmsmbJTQzjK-c5ZxHPk08aYVaMgWRSCGEVJQL0&usqp=CAU')",
      }),
      height: {
        "120vh": "120vh",
      },
      fontFamily: {
        fontpopins: ["Poppins"],
      },
    },
  },
  plugins: [
    // ...
  ],
  variants: {
    extend: {},
  },
};
