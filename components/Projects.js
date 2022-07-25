import { Dot } from "./Dot";
import Link from "next/link";

//
//Content
//

const projects = [
  {
    name: "My resume page",
    description:
      "Which is actually this page. I'm currently still working on it. I want to make it in the right way which is not the same as simplest.",
    link: null,
  },
  {
    name: "DevOps Portal",
    description:
      "I am building a platform/portal for our major French client - Michelin. The portal is designed to facilitate the management of production applications and servers. The project originated from my idea and initiative.",
    link: null,
  },
  {
    name: "Bogoshipo",
    description:
      "Bogoshipo is a Blockchain Pet Game in progress. This website provides information on the development and architecture.",
    link: "https://bogoshipo.com",
  },
  {
    name: "Template-bhai",
    description:
      "A growing project that is being developed with the help of the react community. The project aims to provide ready-made templates for TailwindCSS.",
    link: null,
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-4xl px-4 pt-32 mx-auto space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        Projects
        <Dot />
      </h2>
      <div className="gap-8 xl:grid xl:grid-cols-2">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800"
            >
              <div className="px-6 py-4">
                {project.link ? (
                  <h3 className="mb-2 text-xl font-bold">
                    <Link href="https://github.com/zubin-madon/bogoshipo_website">
                      <a className="underline underline-offset-2 hover:text-blue-800">
                        {project.name}
                      </a>
                    </Link>
                  </h3>
                ) : (
                  <h3 className="mb-2 text-xl font-bold">{project.name}</h3>
                )}
                <p className="mt-4 text-xl text-gray-400 ">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
