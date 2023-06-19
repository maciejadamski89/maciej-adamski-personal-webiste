import {Dot} from "../../components/Dot";

export default function Experience() {
	return (
		<section id="experience" className="flex flex-col max-w-4xl px-4 mx-auto mt-32 space-y-8 text-left">
			<div>
				<h2 className="text-4xl text-center text-white">
					I worked for
					<Dot />
				</h2>
			</div>
			<div className="space-y-4 divide-y-4 divide-slate-600/25">
				<div className="pt-32 space-y-4">
					<h3 className="mt-8 text-2xl font-bold text-white">
						<a href="https://www.kyndryl.com/" className="link">
							Kyndryl
						</a>{" "}
						as Lead, Software Engineering - Development - (currently)
					</h3>
					<h4 className="my-2 text-xl font-semibold text-white">Projects</h4>
					<div>
						<h4 className="font-semibold text-white">
							Security Application for Client - since January 2023 - ongoing
						</h4>
						<p className="mb-2 text-slate-400">
							Application that allows the client to obtain artifacts from servers in the event of a
							cyber-attack or security vulnerability. Composed of four services, the application is fully
							integrated with our whole middleware infrastructure.
						</p>
						<ul className="space-y-2 text-base font-normal list-disc list-inside text-slate-400">
							<li>
								The implementation of new features in the application, in accordance with client
								requirements, has resulted in notable impacts; Successful and timely delivery 4 new
								features.
							</li>
							<li>Maintaining and updating the application codebase to address client issues.</li>
							<li>
								Proficient in the release management of software applications, including deploying new
								versions in test, development, and production environments. Demonstrated success in
								releasing 8 versions of software without any negative impact on client.
							</li>
							<li>
								The successful take over the project as a developer in just two weeks is a notable
								achievement. Despite the size of the team (2 developers) and the short timeframe, the
								transition did not result in any negative impact on the client.
							</li>
							<li>
								<span className="mr-2 font-bold">Tech Stack:</span>
								VUE, TypeScript, NestJS, Docker, docker-compose, OpensShift, Kafka, Ansible, MongoDB.
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-white">
							DevOps Portal for Client – since April 2021 - ongoing
						</h4>
						<p className="mb-2 text-slate-400">
							Portal that provides DevOps engineers access to backup reports from four different
							technologies. The application also features a browser for Tivoli Workload Scheduler (task
							manager for all client applications and our middleware). The whole project was initiated by
							myself and together with my one colleague only – fully developed. It’s composed of over 15
							services currently and still growing.
						</p>
						<ul className="space-y-2 text-base font-normal list-disc list-inside text-slate-400">
							<li>
								Implementation of new technologies into the project and delivering new functionality
								according to customer requirements. Since the beginning of the project, we have
								successfully implemented 5 minimum viable products (MVPs).
							</li>
							<li>
								Maintain and fix code bugs based on requests from the client and Kyndryl teams.
								Successfully reduced the number of bugs heavily and raised the overall performance of
								the entire application.
							</li>
							<li>
								Responsible for the content part of the application. I have led many project
								presentations in front of the client, which were met with tremendously positive feedback
								and customer satisfaction. Received significant publicity in both Europe and the US.
							</li>
							<li>
								Successful releasing of 5 versions of the product without any failures or impact on the
								client and generating almost €50k in profit for the company within 1,5 years.
							</li>
							<li>
								As noteworthy information, the project will be a topic of discussion during the
								renegotiation of the contract between our company and the client.
							</li>
							<li>
								<span className="mr-2 font-bold">Tech Stack:</span>
								Python 3.11, Django, docker, docker-compose, Kong, Flask, JavaScript, TypeScript,
								NextJS13, Tailwind CSS, Bootstrap, jQuery, Open API, Redis, PostgreSQL, Prometheus,
								Grafana, GO Lang, Gravitee.
							</li>
						</ul>
					</div>
				</div>
				<div className="space-y-4">
					<h3 className="mt-8 text-2xl font-bold text-white">
						<a href="https://www.ibm.com/" className="link">
							IBM Global Services Delivery
						</a>{" "}
						as DevOps Leader - 2015-2021, Wroclaw
					</h3>
					<div>
						<ul className="space-y-2 text-base font-normal list-disc list-inside text-slate-400">
							<li>
								Responsible for preparing all new client applications for release in the production
								environment, ensuring alignment with client specifications and requirements. My role
								involved maintaining a daily backlog of requests, dispatching workloads, executing
								requests, and addressing any issues reported by the customer. Additionally, I played a
								key role in process automation. Successfully automated nearly all aspects of executing 4
								out of 7 types of requests.
							</li>
							<li>
								Achieved significant improvements in key performance indicators (KPIs) by reducing the
								number of bad requests reported from client, primarily by improving delivery times.
							</li>
							<li>
								<span className="mr-2 font-bold">Tech Stack:</span>RedHat, AIX, Windows, Snow Service,
								Kanban Dashboards, Shell, PowerShell, Tivoli Workload Scheduler, Tivoli Monitoring
								Solution.
							</li>
						</ul>
					</div>
				</div>
				<div className="space-y-4">
					<h3 className="mt-8 text-2xl font-bold text-white">
						<a href="https://www.nomachine.com/" className="link">
							NoMachine
						</a>{" "}
						as C++ Developer - 2014-2015, Wroclaw
					</h3>
					<div>
						<ul className="space-y-2 text-base font-normal list-disc list-inside text-slate-400">
							<li>
								Successful implementation of CUDA in "C for graphics" into the application as very alpha
								version
							</li>
							<li>
								Maintaining and developing services integrated with NoMachine. Additionally, I have
								expertise in maintaining streaming audio on Linux operating systems. I focused on
								technical aspects of the role, including troubleshooting and problem-solving based on
								client requests.
							</li>
							<li>
								<span className="mr-2 font-bold">Tech Stack:</span>
								C++, C for graphic, Nvidia CUDA, Perl, shell, Ubuntu, RedHat, Debian, Fedora, CentOS,
								OpenSuse, Linux Mint, Windows, MacOS, Oracle Virtual Box.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
