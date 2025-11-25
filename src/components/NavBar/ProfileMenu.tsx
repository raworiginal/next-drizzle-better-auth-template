"use client";
import Link from "next/link";
const ProfileMenu = () => {
	const signedIn = false;
	const user = "user69";

	return (
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
				<div className="avatar avatar-placeholder">User</div>
			</div>
			{signedIn ? (
				<ul
					tabIndex={-1}
					className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
					<li className="text-center font-bold">welcome, {user}</li>
					<li className="btn btn-ghost">profile</li>
					<li className="btn btn-error">sign-out</li>
				</ul>
			) : (
				<ul
					tabIndex={-1}
					className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
					<li className="btn btn-xs btn-primary m-1">Sign-in</li>
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
