"use client";
import {motion} from "framer-motion";

type props = {
	name: string;
	url: string;
};

export default function Navlink({name, url}: props) {
	return (
		<li className="text-lg font-semibold text-white">
			<motion.div whileHover={{y: -5}}>
				<a href={url} className="border-indigo-700 hover:py-2 hover:border-b-4 ">
					{name}
				</a>
			</motion.div>
		</li>
	);
}
