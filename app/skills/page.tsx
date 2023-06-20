import {Dot} from "@/components/Dot";

type CustomLinkProps = {
	title: string;
	href: string;
};

function CustomLink({title, href}: CustomLinkProps) {
	return (
		<a href={href} className="underline underline-offset-2 hover:text-indigo-700">
			{title}
		</a>
	);
}

export default function Skills() {
	return (
		<section id="contact" className="w-full max-w-4xl px-4 mx-auto mt-32 space-y-8 text-center">
			<div data-aos="fade-up">
				<h2 className="text-4xl text-white">
					Skills
					<Dot />
				</h2>
			</div>
			<div className="pt-32 space-y-8">
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-2xl font-semibold text-white">Programming Languages</h3>
					<p className="flex flex-col space-y-1 text-lg text-indigo-200/80">
						<CustomLink title="TypeScript" href="https://www.typescriptlang.org/" />
						<CustomLink title="JavaScript" href="https://www.javascript.com/" />
						<CustomLink title="Python" href="https://www.python.org/" />
						<CustomLink title="Java" href="https://www.java.com/" />
						<CustomLink title="C++" href="https://www.cplusplus.com/" />
						<CustomLink title="Shell Scripting" href="https://www.shellscript.sh/" />
						<CustomLink title="HTML" href="https://html.com/" />
						<CustomLink title="CSS" href="https://www.w3.org/Style/CSS/Overview.en.html" />
						<CustomLink title="SCSS" href="https://sass-lang.com/" />
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-2xl font-semibold text-white">Frameworks</h3>
					<div className="flex flex-col items-center justify-center space-y-1 text-lg text-indigo-200/80">
						<CustomLink title="React" href="https://react.dev/" />
						<CustomLink title="Next13js" href="https://nextjs.org/" />
						<CustomLink title="Nodejs" href="https://nodejs.org/" />
						<CustomLink title="Django" href="https://www.djangoproject.com/" />
						<CustomLink title="Docker" href="https://www.docker.com/" />
						<CustomLink title="Docker Compose" href="https://docs.docker.com/compose/" />
						<CustomLink title="Figma" href="https://www.figma.com/" />
						<CustomLink title="Vue" href="https://vuejs.org/" />
						<CustomLink title="Promehteus" href="https://prometheus.io/" />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-2xl font-semibold text-white">Libraries</h3>
					<div className="flex flex-col items-center justify-center space-y-1 text-lg text-indigo-200/80">
						<CustomLink title="Tailwind CSS" href="https://tailwindcss.com/" />
						<CustomLink title="Bootstrap" href="https://getbootstrap.com/" />
						<CustomLink title="Redux" href="https://redux.js.org/" />
						<CustomLink title="jQuery" href="https://jquery.com/" />
						<CustomLink title="Sass" href="https://sass-lang.com/" />
						<CustomLink title="Tanstack Table" href="https://tanstack.com/table/v8" />
						<CustomLink title="MUI Data Grid" href="https://mui.com/components/data-grid/" />
						<CustomLink title="Redis" href="https://redis.io/" />
						<CustomLink title="Memcached" href="https://memcached.org/" />
						<CustomLink title="Vuetify" href="https://vuetifyjs.com/en/" />
						<CustomLink title="Framer Motion" href="https://www.framer.com/motion/" />
						<CustomLink title="Animate on scroll" href="https://michalsnik.github.io/aos/" />
						<CustomLink title="Radix" href="https://www.radix-ui.com/" />
						<CustomLink title="HeadlessUI" href="https://headlessui.dev/" />
						<CustomLink title="react-chartjs-2" href="https://react-chartjs-2.js.org/" />
						<CustomLink title="Chart.js" href="https://www.chartjs.org/" />
						<CustomLink title="npm" href="https://www.npmjs.com/" />
						<CustomLink title="datatables.js" href="https://datatables.net/" />
						<CustomLink title="flatpickr.js" href="https://flatpickr.js.org/" />
						<CustomLink title="Eslint" href="https://eslint.org/" />
						<CustomLink title="Prettier" href="https://prettier.io/" />
						<CustomLink title="Winstonjs" href="https://github.com/winstonjs/winston" />
						<CustomLink title="Gulp" href="https://gulpjs.com/" />
						<CustomLink title="Vite" href="https://vitejs.dev/" />
						<CustomLink title="Eleven Labs" href="https://beta.elevenlabs.io/" />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-2xl font-semibold text-white">Platforms</h3>
					<div className="flex flex-col space-y-1 text-lg text-indigo-200/80">
						<CustomLink title="GitHub" href="https://github.com/" />
						<CustomLink title="GitLab" href="https://gitlab.com/" />
						<CustomLink title="ServiceNow" href="https://www.snowsoftware.com/" />
						<CustomLink title="Vercel" href="https://vercel.com/" />
						<CustomLink title="OpenShift" href="https://www.openshift.com/" />
						<CustomLink title="Supabase" href="https://supabase.io/" />
						<CustomLink title="Wordpress" href="https://wordpress.com/" />
						<CustomLink title="OpenAI" href="https://openai.com/" />
						<CustomLink title="Grafana" href="https://grafana.com/" />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-2xl font-semibold text-white">Databases</h3>
					<div className="flex flex-col space-y-1 text-lg text-indigo-200/80">
						<CustomLink title="PostgreSQL" href="https://www.postgresql.org/" />
						<CustomLink title="MongoDB" href="https://www.mongodb.com/" />
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-2xl font-semibold text-white">Dev Tools</h3>
					<div className="flex flex-col space-y-1 text-lg text-indigo-200/80">
						<CustomLink title="Git" href="https://git-scm.com/" />
						<CustomLink title="VSCode" href="https://code.visualstudio.com/" />
						<CustomLink title="VIM" href="https://www.vim.org/" />
						<CustomLink title="FishShell" href="https://fishshell.com/" />
						<CustomLink title="WSL2" href="https://docs.microsoft.com/en-us/windows/wsl/" />
						<CustomLink title="Insomnia" href="https://insomnia.rest/" />
						<CustomLink title="Conduktor" href="https://www.conduktor.io/" />
					</div>
				</div>
			</div>
		</section>
	);
}
