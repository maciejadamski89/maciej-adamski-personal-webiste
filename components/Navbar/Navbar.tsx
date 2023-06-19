import Brand from "./Brand";
import Menu2 from "./Menu";
import Button from "@/components/Button";
import {Menu} from "@headlessui/react";
import Hamburger from "./Hamburger";

export default function Navbar() {
	return (
		<header>
			<nav className="z-10 flex items-center justify-between w-full p-4 mx-auto bg-transparent md:p-8 max-w-7xl">
				<Menu2 />
				<Hamburger />
			</nav>
		</header>
	);
}
