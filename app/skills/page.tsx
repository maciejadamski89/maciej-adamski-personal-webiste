import {Dot} from "@/components/Dot";

export default function Skills() {
	return (
		<section id="contact" className="w-full max-w-4xl px-4 mx-auto mt-32 space-y-8 text-center">
			<div data-aos="fade-up">
				<h2 className="text-4xl text-white">
					Skills
					<Dot />
				</h2>
			</div>
			<div className="pt-32 space-y-4">
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-lg font-semibold text-white">Programming Languages</h3>
					<p className="text-lg text-gray-400">
						JavaScript, TypeScript, Python, Java, C++, Shell Scrpting, HTML, CSS, SCSS
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-lg font-semibold text-white">Frameworks</h3>
					<p className="text-lg text-gray-400">
						React, Next13, NodeJS, Django, Docker, Docker Compose, Figma, VUE, Prometheus
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-lg font-semibold text-white">Libraries</h3>
					<p className="text-lg text-gray-400">
						Tailwind CSS, Bootstrap, jQuery, Sass, Tanstack Table, MUI Data Grid, Redis, Memcached, Vuetify,
						Framer Motion, Animate on scroll, Radix, HeadlessUI, react-chartjs-2, chart.js, npm,
						datatables.js, flatpickr.js, Eslint, Prettier, Winston, Gulp, Webpack
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-lg font-semibold text-white">Platforms</h3>
					<p className="text-lg text-gray-400">
						GitHub, GitLab, Snow Service, Vercel, OpenShift, Supabase, Wordpress, OpenAI, Grafana
					</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-lg font-semibold text-white">Databases</h3>
					<p className="text-lg text-gray-400">PostgreSQL, MongoDB</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2">
					<h3 className="text-lg font-semibold text-white">Dev Tools</h3>
					<p className="text-lg text-gray-400">VSCode, VIM, FishShell, WSL2</p>
				</div>
			</div>
		</section>
	);
}
