import Button from "./Button";
import { DotBig, DotSmall } from "./Dot";
import Underline from "./Underline";

export default function About() {
  const content = `
      Hi, my name is Maciej. I'm currently working as a Software Developer and developing a large project for Michelin. In my free time I move to the world of music with the sound of the piano. I am a happy dad as well as a dogmaster for my two beloved dogs. 
  `;

  return (
    <>
      <section
        id="about"
        className="max-w-4xl mx-auto mt-32 space-y-8 text-center"
      >
        <h2 className="text-white">
          About me
          <DotSmall />
        </h2>
        <p className="text-gray-400 2xl:text-2xl">{content}</p>
        <div>
          <Button title="Get in touch" href="#contact" />
        </div>
      </section>
    </>
  );
}
