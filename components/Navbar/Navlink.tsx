"use client";
import Link from "next/link";
import {motion} from "framer-motion";

type props = {
	name: string;
	url: string;
	home?: boolean;
};

export default function Navlink({name, url, home}: props) {
	return (
		<>
			{home && (
				<li className="text-lg font-bold text-white rounded-2xl">
					<motion.div whileHover={{y: -5}}>
						<a href={url} className="py-2 border-b-4 border-blue-700 ">
							{name}
						</a>
					</motion.div>
				</li>
			)}
			{!home && (
				<li className="text-lg font-semibold text-white">
					<motion.div whileHover={{y: -5}}>
						<a href={url} className="border-blue-700 hover:py-2 hover:border-b-4 ">
							{name}
						</a>
					</motion.div>
				</li>
			)}
		</>
	);
}
