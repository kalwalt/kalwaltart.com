/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './_stories/**/*.md',
    './pages/**/*.{html,md}',
    './blog/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    extend: {},
  },
  plugins: []
};
