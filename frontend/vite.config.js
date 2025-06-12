import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		allowedHosts: [
			"04491717-6865-4276-b4e2-392d8144346f-00-3ssixgo0zpscz.picard.replit.dev"
		],
		proxy: {
			"/api": {
				target: "http://localhost:5000",
			},
		},
	},
});