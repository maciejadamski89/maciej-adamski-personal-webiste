import {Dot} from "@/components/Dot";
import {TwitterIcon, FacebookIcon, LinkedinIcon, GithubIcon} from "@/components/Icons/Socialicons";

const phone_number = "+48 510 180 212";
const email_address = "maciej.adamski89@gmail.com";
const twiter_link = "https://twitter.com/MaciejAdamski89";
const facebook_link = "https://www.facebook.com/maciej.adamski89";
const linkedin_link = "https://www.linkedin.com/in/maciej-adamski-0455a984/";
const github_link = "https://github.com/maciejadamski89";

export default function Contact() {
	return (
		<section id="contact" className="w-full max-w-4xl px-4 mx-auto mt-32 space-y-8 text-center">
			<div>
				<h2 className="text-4xl text-white">
					Contact
					<Dot />
				</h2>
			</div>
			<div className="pt-32">
				<div className="flex items-center justify-center space-x-2">
					<p className="text-xl font-semibold text-indigo-200/80">{phone_number}</p>
				</div>
			</div>
			<div>
				<div className="flex items-center justify-center space-x-2">
					<p className="text-xl font-semibold text-indigo-200/80">{email_address}</p>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-0 mx-auto !mt-16">
				<div>
					<div className="flex justify-center">
						<TwitterIcon width="50" height="50" href={twiter_link} />
					</div>
				</div>
				<div>
					<div className="flex justify-center">
						<FacebookIcon width="50" height="50" href={facebook_link} />
					</div>
				</div>
				<div>
					<div className="flex justify-center">
						<LinkedinIcon width="50" height="50" href={linkedin_link} />
					</div>
				</div>
				<div>
					<div className="flex justify-center">
						<GithubIcon width="50" height="50" href={github_link} />
					</div>
				</div>
			</div>
		</section>
	);
}
