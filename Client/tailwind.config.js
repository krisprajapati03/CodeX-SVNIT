export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gov-blue': '#002147', // Dark blue for navbar & buttons
        'gov-light-blue': '#0056b3', // Lighter blue for hover states
        'gov-orange': '#FF6F00', // Accent color for buttons and highlights
        'gov-light-orange': '#FFA500', // Lighter orange shade for hover states
        'gov-gray': '#F8F9FA', // Light gray for background sections
        'gov-dark-gray': '#343A40', // Dark gray for footer text
        'gov-white': '#FFFFFF', // White for text & backgrounds
        'gov-black': '#212529', // Black for text and strong contrast
      },
    },
  },
  plugins: [],
}

