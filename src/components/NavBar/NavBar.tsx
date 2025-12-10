import CrudMenu from "./CrudMenu";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const NavBar = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return (
		<nav className="navbar">
			<section className="navbar-start">
				<CrudMenu />
				<Link className="btn btn-ghost" href={session ? "/dashboard" : "/"}>
					CRUD
				</Link>
			</section>
			<UserMenu />
		</nav>
	);
};
export default NavBar;
