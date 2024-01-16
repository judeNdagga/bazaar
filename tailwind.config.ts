import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "white",
        
"secondary": "#ef8def",
        
"accent": "#f276d1",
        
"neutral": "#29242d",
        
"base-100": "#f4f2f8",
        
"info": "#3fafd5",
        
"success": "#66ebcc",
        
"warning": "#d0b116",
        
"error": "#e8173a",

"body": {
  "background-color": "#f4f2f8",
},
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
