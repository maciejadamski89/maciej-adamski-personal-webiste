import { Dot } from "./Dot";
import {
  ReactIcon,
  NextIcon,
  TailwindIcon,
  MUIIcon,
  DockerIcon,
  DjangoIcon,
} from "./Icons/Devicons";
import Link from "next/link";
import Button from "./Button";

//
//Size of dev icons
//
const [width, height] = [100, 100];

//
//Content
//
const dev_list = [
  {
    name: "React",
    icon: <ReactIcon width={width} height={height} />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <NextIcon width={width} height={height} />,
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon width={width} height={height} />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    icon: <MUIIcon width={width} height={height} />,
    link: "https://material-ui.com/",
  },
  {
    name: "Docker",
    icon: <DockerIcon width={width} height={height} />,
    link: "https://www.docker.com/",
  },
  {
    name: "Django",
    icon: <DjangoIcon width={width} height={height} />,
    link: "https://www.djangoproject.com/",
  },
];

//
//Component
//
export default function Skills() {
  let delay = 0;
  return (
    <section
      id="skills"
      className="max-w-4xl px-4 pt-32 mx-auto space-y-8 text-center lg:pt-80"
    >
      <div data-aos="fade-up">
        <h2 className="text-4xl text-white">
          I work with
          <Dot />
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-4 text-white lg:grid-cols-6 ">
        {dev_list.map((dev) => {
          delay += 200;
          return (
            <li
              key={dev.name}
              className="flex flex-col items-center justify-center"
            >
              <div data-aos="zoom-out" data-aos-delay={delay}>
                <Link href={dev.link}>
                  <a className="mb-2 text-gray-400 link">{dev.name}</a>
                </Link>
                {dev.icon}
              </div>
            </li>
          );
        })}
      </ul>
      <div data-aos="fade-left" data-aos-delay="1000">
        <Button
          title="Check my CodeWars"
          href="https://www.codewars.com/users/maciejadamski"
        />
      </div>
    </section>
  );
}
