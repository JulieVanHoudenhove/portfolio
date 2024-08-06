/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yipes: ['Yipes', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '20px',
        sm: '24px',
        md: '32px',
        lg: '36px',
        xl: '48px',
        '2xl': '64px',
      },
      colors: {
        dark: '#1E1C1C',
        cream: '#F8F7F3'
      }
    },
  },
  plugins: [],
};
