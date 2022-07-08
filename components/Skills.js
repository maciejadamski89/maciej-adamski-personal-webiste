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
      <section
        id="skills"
        className="max-w-4xl mx-auto space-y-8 text-center mt-52"
      >
        <h2 className="text-white">
          I work with
          <DotSmall />
        </h2>

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
