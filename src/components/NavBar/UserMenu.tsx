import { IoPersonCircleOutline } from "react-icons/io5";

const UserMenu = () => {
	const isSignedIn = true;

	if (!isSignedIn) {
		return (
			<section className="navbar-end flex gap-1">
				<button className="btn btn-primary">Sign-in</button>
				<button className="btn btn-secondary btn-outline">Sign-up</button>
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
					<li className="btn btn-xs btn-error btn-outline">sign-out</li>
				</ul>
			</div>
		</section>
	);
};
export default UserMenu;
