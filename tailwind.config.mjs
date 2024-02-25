/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  brandColor: "#48BB78",
		  backgroundColor: "#F5FAFF",
		  yellowColor:"#E5D72C",
		  Grey:"#374151",
		  DarkGrey:"#111827"
		},
		fontFamily: { Satoshi: ["Satoshi", "sans-serif"] },
  
		keyframes: {
		  slide: {
			"0%": { transform: "translateX(600px)" },
			"100%": { transform: "translateX(-600px)" },
		  },
		  aeroplane: {
			"0%": { transform: "translate(-1000px)"},
			"100%": { transform: "translate(1000px)" },
		  },
		},
		animation: {
		  slide: "slide 20s linear infinite",
		  aeroplane: "aeroplane 20s linear infinite",
		},
	  },
	},
	plugins: [],
  };