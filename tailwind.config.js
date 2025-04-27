export default {
    //darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
      screens: {
        xs: '320px',     // Mobile kecil
        sm: '768px',     // Tablet
        md: '1152px',    // Desktop kecil
        lg: '1440px',    // Desktop medium
        xl: '1920px',    // Desktop besar
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp'),
    ],
  }