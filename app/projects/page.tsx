import {Dot} from "../../components/Dot";
import Link from "next/link";

const projects = [
	{
		name: "Article Summarizer",
		description:
			"This is an application that uses AI to generate summaries of articles. It provides users with a quick and efficient way to extract key information from large volumes of text.",
		link: "https://summarizer-article-ai.vercel.app/",
	},
	{
		name: "Peggy",
		description:
			"This application is designed to monitor the incubation of parrot eggs and relies on daily measurements of egg weight. It is still during development.",
		link: "https://github.com/maciejadamski89/peggy",
	},
	{
		name: "Conan RPG",
		description: "Simple application to help finding and select talents for Conan RPG game",
		link: "https://conan-azure.vercel.app/",
	},
	{
		name: "Digital Agency Template",
		description: "Website Next13 template for digital agency",
		link: "https://digital-agency-template.vercel.app/",
	},
];

export default function Projects() {
	let delay = 0;
	return (
		<section id="projects" className="max-w-4xl px-4 mx-auto mt-32 space-y-8 text-center">
			<div data-aos="fade-up">
				<h2 className="text-4xl text-white">
					Side Projects
					<Dot />
				</h2>
			</div>
			<div className="grid gap-8 pt-32 xl:grid-cols-2">
				{projects.map((project) => {
					return (
						<div key={project.name}>
							<div
								key={project.name}
								className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-slate-800/20"
							>
								<div className="px-6 py-4">
									{project.link ? (
										<h3 className="mb-2 text-xl font-bold text-white">
											<Link
												href={project.link}
												className="text-lg text-white underline underline-offset-2 hover:text-blue-500 text-normal"
											>
												{project.name}
											</Link>
										</h3>
									) : (
										<h3 className="mb-2 text-xl font-bold text-white">{project.name}</h3>
									)}
									<p className="mt-4 text-xl text-gray-400 ">{project.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
