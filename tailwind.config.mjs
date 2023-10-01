/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./emails/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      h1: '30px',
      h2: '24px',
      body: '16px',
      caption: '14px',
    },
    colors: {
      /* Primary */
      inherit: 'inherit',
      white: '#FFFFFF',
      black: '#050F19',
      accent: '#0A5AFF',
      primary: '#3A4152',
      secondary: '#899198',
    },
  },
};

export default config;
