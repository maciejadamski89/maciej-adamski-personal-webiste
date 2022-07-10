import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { DotSmall } from "./Dot";

export default function Hero() {
  const headers = ["Software Developer", "DevOps"];
  const link_style = "underline underline-offset-2 hover:text-blue-800";
  const paragraph = () => {
    return (
      <>
        I create beautiful front-end apps and wepsites using {""}
        <Link href="https://nextjs.org">
          <a className={link_style}>Next.js</a>
        </Link>
        &nbsp;,&nbsp;
        <Link href="https://tailwindcss.com">
          <a className={link_style}>TailwindCSS</a>
        </Link>
        &nbsp;and&nbsp;{" "}
        <Link href="https://mui.com">
          <a className={link_style}>React MUI</a>
        </Link>
        &nbsp;.
      </>
    );
  };

  return (
    <>
      <section className="text-gray-600 lg:mt-40 mx-auto flex items-center justify-center max-w-[80rem] px-2">
        <div className="flex flex-col items-center w-full md:flex-row">
          <div className="flex flex-col items-center space-y-4 text-center lg:flex-grow md:w-1/2 md:items-start md:text-left">
            {headers.map((header, index) => {
              return (
                <h1 key={index} className="text-2xl text-white md:text-6xl">
                  {header}
                  <DotSmall />
                </h1>
              );
            })}

            <p className="py-6 text-lg text-gray-400 md:text-2xl">
              {paragraph()}
            </p>
            <div className="flex justify-center">
              <Button
                title="Checkout source code of this page"
                href="https://github.com/maciejadamski89/next-my-resume-page"
              />
            </div>
          </div>
          <div className="flex justify-end w-8/12 mt-8 md:mt-0 lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              className="object-cover object-center rounded-xl -z-10"
              alt="hero"
              width="400px"
              height="600px"
              src="/profile.jpg"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
