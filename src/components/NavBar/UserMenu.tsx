import { IoPersonCircleOutline } from "react-icons/io5";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { signOut } from "@/actions/userActions";

const UserMenu = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session) {
		return (
			<section className="navbar-end flex gap-1">
				<Link href={"/auth/sign-in"} className="btn btn-primary">
					Sign-in
				</Link>
				<Link href={"/auth/sign-up"} className="btn btn-secondary btn-outline">
					Sign-up
				</Link>
			</section>
		);
	}
	return (
		<section className="navbar-end flex gap-1">
			<div className="dropdown dropdown-end">
				<IoPersonCircleOutline
					tabIndex={0}
					className="btn btn-ghost btn-sm rounded-full"
				/>
				<ul
					tabIndex={-1}
					className="menu dropdown-content rounded-box bg-base-100 z-1 mt-3 w-52 p-2 shadow">
					<li className="link link-hover">profile</li>
					<li onClick={signOut} className="btn btn-xs btn-error btn-outline">
						sign-out
					</li>
				</ul>
			</div>
		</section>
	);
};
export default UserMenu;
