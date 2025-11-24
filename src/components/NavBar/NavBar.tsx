import Dropdown from "./Dropdown";
import ProfileMenu from "./ProfileMenu";
const NavBar = () => {
	return (
		<nav className="navbar mx-auto bg-base-100 shadow-sm">
			<section className="navbar-start">
				<Dropdown />
			</section>
			<section className="navbar-center">
				<div className="btn btn-ghost text-xl">CRUD</div>
			</section>
			<section className="navbar-end">
				<ProfileMenu />
			</section>
		</nav>
	);
};
export default NavBar;
