/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#A4C4FC', 
        'gradient-end': '#DBB4FD',
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
