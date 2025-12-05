import { db } from "@/db/drizzle";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: schema,
	}),
	emailAndPassword: {
		enabled: true,
	},
	plugins: [nextCookies()],
});

export { auth };
