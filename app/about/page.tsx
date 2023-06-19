import {Dot} from "@/components/Dot";

export default function About() {
	return (
		<section id="about" className="max-w-4xl px-4 mx-auto mt-32 space-y-8 text-center">
			<div>
				<h2 className="text-4xl text-white">
					About me
					<Dot />
				</h2>
			</div>
			<div className="pt-32 space-y-4 text-left">
				<p className="text-base font-normal md:text-lg text-indigo-200/80">
					I am a skilled Software Engineer with expertise in a diverse range of technologies. From front-end
					development using JavaScript, TypeScript, HTML, and CSS, to creating stunning user interfaces with
					Tailwind CSS, React, Next.js.
				</p>
				<p className="text-base font-normal md:text-lg text-indigo-200/80">
					On the backend, I excel in Python and Django, building robust APIs and scalable server-side
					applications. I am well-versed in containerization with Docker, enabling seamless deployment and
					management of applications. Additionally, I have extensive knowledge of databases like PostgreSQL,
					MongoDB, as well as caching solutions like Redis and Memcached for efficient data storage and
					retrieval.
				</p>
				<p className="text-base font-normal md:text-lg text-indigo-200/80">
					I am experienced in working with frameworks such as Bootstrap, NestJS, MUI Data Grid, and
					TanStackTable, empowering me to deliver advanced features and functionalities to clients and users.
					With proficiency in both Linux and Windows environments, I am adaptable to various development
					setups.
				</p>
				<p className="text-base font-normal md:text-lg text-indigo-200/80">
					As a dedicated professional, I am proficient in code editors like VSCode and VIM, and I have a
					strong command of scripting and automation using PowerShell, Bash, and Fish Shell. I am well-versed
					in version control using Git, enabling collaborative development with teams.
				</p>
				<p className="text-base font-normal md:text-lg text-indigo-200/80">
					Driven by a passion for excellence, I constantly stay updated with the latest industry trends and
					strive to deliver high-quality solutions that exceed expectations. With my comprehensive skill set
					and collaborative mindset, I am ready to tackle complex projects and deliver exceptional results.
				</p>
			</div>
		</section>
	);
}
