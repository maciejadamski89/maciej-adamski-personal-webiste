import Menu from "./Menu";
import Hamburger from "./Hamburger";

export default function Navbar() {
	return (
		<header>
			<nav className="z-10 flex items-center justify-between w-full p-4 mx-auto bg-transparent md:p-8 max-w-7xl">
				<Menu />
				<Hamburger />
			</nav>
		</header>
	);
}
