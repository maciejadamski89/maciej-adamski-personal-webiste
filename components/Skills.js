import { DotSmall } from "./Dot";
import {
  ReactIcon,
  NextIcon,
  TailwindIcon,
  MUIIcon,
  DockerIcon,
  DjangoIcon,
} from "./Icons/Devicons";

export default function Skills() {
  const [width, height] = [100, 100];
  return (
    <>
      <div id="skills"></div>
      <section className="max-w-4xl mx-auto space-y-8 text-center mt-52">
        <h2 className="text-white">
          I work with
          <DotSmall />
        </h2>

        <div className="grid grid-cols-6 text-white ">
          <p className="flex flex-col items-center justify-center">
            <span className="mb-2 text-gray-400">React</span>
            <ReactIcon width={width} height={height} />
          </p>
          <p className="flex flex-col items-center justify-center">
            <span className="mb-2 text-gray-400">Next.js</span>
            <NextIcon width={width} height={height} />
          </p>
          <p className="flex flex-col items-center justify-center">
            <span className="mb-2 text-gray-400">TailwindCSS</span>
            <TailwindIcon width={width} height={height} />
          </p>
          <p className="flex flex-col items-center justify-center">
            <span className="mb-2 text-gray-400">Material UI</span>
            <MUIIcon width={width} height={height} />
          </p>
          <p className="flex flex-col items-center justify-center">
            <span className="mb-2 text-gray-400">Django</span>
            <DjangoIcon width={width} height={height} />
          </p>
          <p className="flex flex-col items-center justify-center">
            <span className="mb-2 text-gray-400">Docker</span>
            <DockerIcon width={width} height={height} />
          </p>
        </div>
      </section>
    </>
  );
}
