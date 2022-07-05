import Button from "./Button";
import { DotBig, DotSmall } from "./Dot";
import Underline from "./Underline";

export default function About() {
  return (
    <>
      <section id="about" className="container mx-auto space-y-8 text-left">
        <h1 className="text-3xl font-bold xl:text-5xl ">
          About me
          <DotSmall />
          <Underline />
        </h1>
        <p className="text-xl text-gray-400">
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
