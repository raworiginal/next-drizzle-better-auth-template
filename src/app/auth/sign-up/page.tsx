"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";

export default function SignUp() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			setLoading(false);
			return;
		}

		if (password.length < 6) {
			setError("Password must be at least 6 characters");
			setLoading(false);
			return;
		}

		try {
			const response = await signUp.email({
				email,
				password,
				name: email.split("@")[0],
			});

			if (response.error) {
				setError(response.error.message || "Sign up failed");
			} else {
				router.push("/dashboard");
			}
		} catch (err) {
			setError("An unexpected error occurred");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="h-screen flex justify-center items-center">
			<div className="bg-base-100 rounded-lg shadow-lg p-8 w-full max-w-md">
				<h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

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
							className="input w-full validator"
							placeholder="you@example.com"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">Password</label>
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="input w-full validator"
							placeholder="••••••••"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							Confirm Password
						</label>
						<input
							type="password"
							required
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="input w-full validator"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full btn btn-info">
						{loading ? "Signing up..." : "Sign Up"}
					</button>
				</form>

				<p className="text-center text-sm mt-6">
					Already have an account?{" "}
					<Link href="/auth/sign-in" className="link link-hover link-accent">
						Sign In
					</Link>
				</p>
			</div>
		</main>
	);
}
