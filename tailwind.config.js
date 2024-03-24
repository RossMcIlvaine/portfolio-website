/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
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

