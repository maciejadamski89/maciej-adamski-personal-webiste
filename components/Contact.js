import { Dot } from "./Dot";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
} from "./Icons/Socialicons";

const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl px-4 pt-32 mx-auto space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        Contact
        <Dot />
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <PhoneIcon />
        <p className="text-lg text-gray-400 2xl:text-2xl">+48 510 180 212</p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <MailIcon />
        <p className="text-lg text-gray-400 2xl:text-2xl">
          maciej.adamski89@gmail.com
        </p>
      </div>
      <div className="grid grid-cols-4 gap-0 mx-auto !mt-16">
        <div className="flex justify-center">
          <TwitterIcon
            width="50"
            height="50"
            href="https://twitter.com/MaciejAdamski89"
          />
        </div>
        <div className="flex justify-center">
          <FacebookIcon
            width="50"
            height="50"
            href="https://www.facebook.com/maciej.adamski89"
          />
        </div>
        <div className="flex justify-center">
          <LinkedinIcon
            width="50"
            height="50"
            href="https://www.linkedin.com/in/maciej-adamski-0455a984/"
          />
        </div>
        <div className="flex justify-center">
          <GithubIcon
            width="50"
            height="50"
            href="https://github.com/maciejadamski89"
          />
        </div>
      </div>
    </section>
  );
}
