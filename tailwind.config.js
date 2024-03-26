/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow:{
        "diag" : "10px 10px #c7d2fe",
      },
      colors:{
        "mainBackground" : "#1F1F1F",
        "mainHighlight" : "#EB6763",
        "github" : "#161B22",
        "linkedin" : "#0A66C2",
        "instagram" : "#E84E47",
      },
      fontSize:{
        "socialIcon" : "1.875rem",
      },
      transitionDuration:{
        "0.5" : "0.5s",
      },
      width:{
        "30" : "30%",
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

