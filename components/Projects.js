import { DotSmall } from "./Dot";
import Link from "next/link";

export default function About() {
  const content = `
      Hi, my name is Maciej. I'm currently working as a Software Developer and developing a large project for Michelin. In my free time I move to the world of music with the sound of the piano. I am a happy dad as well as a dogmaster for my two beloved dogs. 
  `;

  return (
    <>
      <section
        id="projects"
        className="max-w-4xl mx-auto space-y-8 text-center mt-52"
      >
        <h2 className="text-white">
          Projects
          <DotSmall />
        </h2>
        <div className="gap-8 xl:grid xl:grid-cols-2">
          <div>
            <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">My resume page</div>
                <p className="mt-4 text-xl text-gray-400 ">
                  Which is actually this page. I'm currently still working on
                  it. I want to make it in the right way which is not the same
                  as simplest.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">DevOps Portal</div>
                <p className="mt-4 text-xl text-gray-400 ">
                  I am building a platform/portal for our major French client -
                  Michelin. The portal is designed to facilitate the management
                  of production applications and servers. The project originated
                  from my idea and initiative.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">
                  <Link href="https://github.com/zubin-madon/bogoshipo_website">
                    <a className="underline underline-offset-2 hover:text-blue-800">
                      Bogoshipo
                    </a>
                  </Link>{" "}
                  website
                </div>
                <p className="mt-4 text-xl text-gray-400 ">
                  Bogoshipo is a Blockchain Pet Game in progress. This website
                  provides information on the development and architecture.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center h-full max-w-xl p-4 mx-auto my-2 overflow-hidden rounded shadow-lg bg-neutral-800">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">
                  <Link href="https://github.com/zubin-madon/bogoshipo_website">
                    <a className="underline underline-offset-2 hover:text-blue-800">
                      Template-bhai
                    </a>
                  </Link>{" "}
                </div>
                <p className="mt-4 text-xl text-gray-400 ">
                  A growing project that is being developed with the help of the
                  react community. The project aims to provide ready-made
                  templates for TailwindCSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
