"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			const response = await signIn.email({
				email,
				password,
			});

			if (response.error) {
				setError(response.error.message || "Sign in failed");
			} else {
				router.push("/dashboard");
			}
		} catch (err) {
			console.error(err.message);
			setError("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="flex h-screen justify-center items-center">
			<div className="bg-base-100 rounded-lg shadow-lg p-8 w-full max-w-md">
				<h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

				{error && (
					<div role="alert" className="alert alert-error alert-soft">
						<span>{error}</span>
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
							className="input w-full validator"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Password</label>
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full input validator"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full btn btn-info">
						{loading ? "Signing in..." : "Sign In"}
					</button>
				</form>

				<p className="text-center text-sm text-gray-600 mt-6">
					Don&apos;t have an account?{" "}
					<Link href="/auth/sign-up" className="link link-info link-hover">
						Sign Up
					</Link>
				</p>
			</div>
		</main>
	);
}
