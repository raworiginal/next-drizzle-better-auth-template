"use server";
import { auth } from "@/lib/auth";
import type { SignInData, SignUpData } from "../../types/user";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { APIError } from "better-auth";

const signUp = async (body: SignUpData) => {
	try {
		await auth.api.signUpEmail({ body });
	} catch (error) {
		if (error instanceof APIError) {
			return { success: false, message: error.message || "Sign up failed" };
		}
		console.error(error);
	}
	redirect("/dashboard");
};

const signIn = async (body: SignInData) => {
	try {
		await auth.api.signInEmail({ body });
	} catch (error) {
		if (error instanceof APIError) {
			return { success: false, message: error.message || "Sign up failed" };
		}
		console.error(error);
	}
	redirect("/dashboard");
};

const signOut = async () => {
	await auth.api.signOut({
		headers: await headers(),
	});
};

export { signIn, signUp, signOut };
