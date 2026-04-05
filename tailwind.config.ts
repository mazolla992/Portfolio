import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f2f7f2',
          100: '#e0ede0',
          200: '#bdd9bb',
          300: '#93bf8f',
          400: '#62a05b',
          500: '#3d7a36',
          600: '#2d5a27',
          700: '#1a2e1a',
          800: '#152515',
          900: '#101c10',
          950: '#0a120a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
