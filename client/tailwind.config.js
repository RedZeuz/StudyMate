import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#344CB7",
				secondary: "#4A63E7",
				light: "#6B81FF"
			}
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					primary: "#344CB7",
					secondary: "#4A63E7",
					accent: "#6B81FF",
					"base-100": "#FFFFFF",
				},
			},
		],
	},
	plugins: [daisyui],
};
