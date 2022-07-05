import Button from "./Button";
import { DotBig, DotSmall } from "./Dot";
import Underline from "./Underline";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="max-w-4xl mx-auto space-y-8 text-center mt-32"
      >
        <h2 className="text-white">
          About me
          <DotSmall />
        </h2>
        <p className="2xl:text-2xl text-gray-400">
          Hi, I'm Maciej. I deal with software development, package management,
          automation and web design. I can easily establish new contacts. I'm
          strongly involved in every project. Performance and design are key for
          me.
        </p>
        <div>
          <Button title="Get in touch" href="#contact" />
        </div>
      </section>
    </>
  );
}
