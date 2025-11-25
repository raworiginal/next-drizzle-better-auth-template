"use client";
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ProfileMenu = () => {
	const { data: session } = useSession();
	const router = useRouter();
	return (
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
				<div className="avatar avatar-placeholder">User</div>
			</div>
			{session ? (
				<div className="flex items-center gap-4">
					<span>Welcome, {session.user.name}</span>
					<button
						onClick={async () => {
							await signOut();
							router.push("/");
						}}
						className="btn btn-error">
						Sign Out
					</button>
				</div>
			) : (
				<ul
					tabIndex={-1}
					className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
					<Link href={"/auth/sign-in"} className="btn btn-xs btn-primary m-1">
						Sign-in
					</Link>
					<Link
						href={"/auth/sign-up"}
						className="btn btn-xs btn-outline btn-error m-1">
						sign-up
					</Link>
				</ul>
			)}
		</div>
	);
};

export default ProfileMenu;
