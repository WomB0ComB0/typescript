import { Config } from 'tailwindcss'

const config:  Config = {
  content: ["./index.html", "./src/frontend/**/*.{tsx, ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config