import { IoMenu } from "react-icons/io5";

const Dropdown = () => {
	return (
		<div className="dropdown">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
				<IoMenu />
			</div>
			<ul
				tabIndex={"-1"}
				className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li className="btn btn-ghost">New</li>
				<li className="btn btn-ghost">Index</li>
			</ul>
		</div>
	);
};
export default Dropdown;
