import { DotSmall } from "./Dot";
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
} from "./Icons/Socialicons";

export default function Contact() {
  return (
    <>
      <div id="contact"></div>
      <section className="max-w-4xl px-4 mx-auto mt-32 space-y-8 text-center lg:mt-52">
        <h2 className="text-2xl text-white">
          Contact
          <DotSmall />
        </h2>
        <p className="text-lg text-gray-400 2xl:text-2xl">+48 510 180 212</p>
        <p className="text-lg text-gray-400 2xl:text-2xl">
          maciej.adamski89@gmail.com
        </p>
        <div className="grid grid-cols-4 gap-0 mx-auto">
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
    </>
  );
}
