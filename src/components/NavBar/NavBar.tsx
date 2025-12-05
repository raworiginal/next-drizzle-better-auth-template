import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import UserMenu from "./UserMenu";
const NavBar = () => {
	return (
		<nav className="navbar">
			<section className="navbar-start">
				<button className="btn btn-ghost">
					<IoMenu />
				</button>
				<Link className="btn btn-ghost" href="/">
					CRUD
				</Link>
			</section>
			<UserMenu />
		</nav>
	);
};
export default NavBar;
