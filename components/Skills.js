import Button from "./Button";
import { DotBig, DotSmall } from "./Dot";
import Underline from "./Underline";
import {
  ReactIcon,
  NextIcon,
  TailwindIcon,
  MUIIcon,
  DockerIcon,
  DjangoIcon,
} from "./Devicons";

export default function Skills() {
  const [width, height] = [100, 100];
  return (
    <>
      <section
        id="skills"
        className="max-w-4xl mx-auto space-y-8 text-center mt-52"
      >
        <h2 className="text-white">
          My Skills
          <DotSmall />
        </h2>
        <p className="text-gray-400 2xl:text-2xl">
          I am currently working with
        </p>

        <div className="grid grid-cols-6 text-white">
          <ReactIcon width={width} height={height} />
          <NextIcon width={width} height={height} />
          <TailwindIcon width={width} height={height} />
          <MUIIcon width={width} height={height} />
          <DjangoIcon width={width} height={height} />
          <DockerIcon width={width} height={height} />
        </div>
      </section>
    </>
  );
}
