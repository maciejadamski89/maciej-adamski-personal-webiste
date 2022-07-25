import Button from "./Button";
import { Dot } from "./Dot";

//
// content
//
const section_title = "About me";

const section_paragraph = `
          Hi, my name is Maciej. I'm currently working as a Software Developer
          and developing a large project for Michelin. In my free time I move to
          the world of music with the sound of the piano. I am a happy dad as
          well as a dogmaster for my two beloved dogs.
`;

//
// function
//
export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl px-4 pt-32 mx-auto space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        {section_title}
        <Dot />
      </h2>
      <p className="text-lg text-gray-400 2xl:text-2xl">{section_paragraph}</p>
      <div>
        <Button title="Get in touch" href="#contact" />
      </div>
    </section>
  );
}
