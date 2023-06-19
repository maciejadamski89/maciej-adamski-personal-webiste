import Image from "next/image";
import Button from "@/components/Button";
import {Dot} from "@/components/Dot";

export default function Hero() {
	return (
		<>
			<section className="grid gap-4 px-4 mx-auto mt-16 md:px-8 md:mt-32 md:grid-cols-3 max-w-7xl">
				<div className="flex flex-col items-center justify-center space-y-6 lg:space-y-8 md:items-start md:col-span-2">
					<div>
						<h1 className="text-4xl text-center text-white md:text-left lg:text-5xl xl:text-6xl">
							Software Engineering - Development
							<div className="hidden md:inline-block">
								<Dot />
							</div>
						</h1>
					</div>

					<div className="max-w-2xl">
						<p className="text-base text-left text-gray-400 md:text-lg md:text-left md:text-2xl">
							I am an experienced Software Engineer specializing in development and implementation web
							appl solutions. Proficient in multiple programming languages and frameworks, with a strong
							focus on clean code and scalable architecture. Passionate about creating efficient and
							user-friendly software that meets the highest standards of quality and functionality.
							Dedicated to continuous learning and staying up-to-date with the latest industry trends.
							Committed to collaborating with teams to drive innovation and deliver exceptional results.
						</p>
					</div>
					<div>
						<Button title="Contact me" href="/contact" />
					</div>
				</div>
				<div>
					<div className="flex justify-center mt-8 md:mt-0 md:justify-end">
						<div className="w-1/2 md:w-full">
							<Image
								className="object-cover object-center rounded-xl"
								alt="hero"
								width={400}
								height={600}
								src="/profile.jpg"
							></Image>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
