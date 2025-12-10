import { IoMenu } from "react-icons/io5";

const CrudMenu = () => {
	return (
		<section className="flex gap-1">
			<div className="dropdown dropdown-start">
				<IoMenu tabIndex={0} className="btn btn-ghost rounded-full" />
				<ul
					tabIndex={-1}
					className="menu dropdown-content rounded-box bg-base-100 z-1 mt-3 w-52 p-2 shadow">
					<li className="link link-hover">Create</li>
					<li className="link link-hover">Retrieve</li>
				</ul>
			</div>
		</section>
	);
};

export default CrudMenu;
