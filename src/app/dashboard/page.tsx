import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const Dashboard = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session) {
		redirect("/auth/sign-in");
	}

	return (
		<main className="max-w-6xl w-full mx-auto p-4 mt-16">
			<div className="bg-base-100 rounded-lg shadow-lg p-8 text-center">
				<h2 className="text-3xl font-bold mb-4">
					Welcome, {session.user.name}!
				</h2>
				<p>You may now CRUD stuff</p>
			</div>
		</main>
	);
};

export default Dashboard;
