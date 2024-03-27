/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow:{
        "diag" : "10px 10px #EB6763",
        "binder" : "10px 0px #EB6763",
        "navigation" : "0px 10px #EB6763"
      },
      colors:{
        "mainBackground" : "#1F1F1F",
        "mainHighlight" : "#EB6763",
        "github" : "#161B22",
        "linkedin" : "#0A66C2",
        "instagram" : "#E84E47",
      },
      fontFamily:{
        "Biryani" : ["Biryani", "sans-serif"],
      },
      fontSize:{
        "socialIcon" : "1.875rem",
        "title" : "6rem"
      },
      transitionDuration:{
        "0.5" : "0.5s",
      },
      width:{
        "nav" : "10%",
        "30%" : "30%",
        "95%" : "95%"
      }
    },
  },
  safelist: [
    {
      pattern: /(text|bg|border)-(github|linkedin|instagram)/,
      variants: ['hover'],
    },
  ],
  plugins: [],
}

