import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'soft-cream': '#F0EAD6',
        'deep-charcoal': '#333333',
        'muted-olive': '#A0A083',
        'vibrant-coral': '#FF6B6B',
      },
      fontFamily: {
        primary: ['"DM Serif Display"', 'serif'],
        secondary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};