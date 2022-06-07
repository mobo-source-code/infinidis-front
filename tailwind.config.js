module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        source: "'Source Sans Pro' sans-serif"
      },
      colors: {
        side: "#F7BFB1",
        top: '#F68468',
        links: '#0071C2',
        button: '#2F49D1',
        title: '#163C55',
        sub: '#69707D'

      }
    },
  },
  plugins: [],
};
