import Button from "./Button";
import { Dot } from "./Dot";
// ..

//
//Content
//
const about_me_description = `
          Hi, my name is Maciej. I'm currently working as a Software Developer
          and developing a large project for Michelin. In my free time I move to
          the world of music with the sound of the piano. I am a happy dad as
          well as a dogmaster for my two beloved dogs.
`;

//
//Component
//
export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl px-4 pt-32 mx-auto space-y-8 text-center lg:pt-80"
    >
      <div data-aos="fade-up">
        <h2 className="text-4xl text-white">
          About me
          <Dot />
        </h2>
      </div>
      <div data-aos="fade-right" data-aos-delay="300">
        <p className="text-lg text-gray-400 2xl:text-2xl">
          {about_me_description}
        </p>
      </div>
      <div>
        <div data-aos="fade-left" data-aos-delay="500">
          <Button title="Get in touch" href="#contact" />
        </div>
      </div>
    </section>
  );
}
