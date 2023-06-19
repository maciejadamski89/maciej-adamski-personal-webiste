import {Menu, Transition} from "@headlessui/react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {Dot} from "../Dot";

export default function Hamburger() {
	return (
		<Menu>
			{({open}) => (
				<>
					<Menu.Button className="block md:hidden">
						{!open ? <Bars3Icon className="w-8 h-8 text-white" /> : null}
					</Menu.Button>

					{open && (
						<div className="absolute top-0 left-0 w-full p-8 text-center bg-indigo-950/95">
							<Menu.Items static>
								<Menu.Item>
									{({active}) => (
										<a
											className={`${
												active ? "text-slate-400" : "text-white"
											} block px-4 py-2 text-lg`}
											href="/"
										>
											home
											<Dot />
										</a>
									)}
								</Menu.Item>

								<Menu.Item>
									{({active}) => (
										<a
											className={`${
												active ? "text-slate-400" : "text-white"
											} block px-4 py-2 text-lg`}
											href="/about"
										>
											about
											<Dot />
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({active}) => (
										<a
											className={`${
												active ? "text-slate-400" : "text-white"
											} block px-4 py-2 text-lg`}
											href="/experience"
										>
											experience
											<Dot />
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({active}) => (
										<a
											className={`${
												active ? "text-slate-400" : "text-white"
											} block px-4 py-2 text-lg`}
											href="/skills"
										>
											skills
											<Dot />
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({active}) => (
										<a
											className={`${
												active ? "text-slate-400" : "text-white"
											} block px-4 py-2 text-lg`}
											href="/projects"
										>
											projects
											<Dot />
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({active}) => (
										<a
											className={`${
												active ? "text-slate-400" : "text-white"
											} block px-4 py-2 text-lg`}
											href="/contact"
										>
											contact
											<Dot />
										</a>
									)}
								</Menu.Item>
							</Menu.Items>
						</div>
					)}
				</>
			)}
		</Menu>
	);
}
