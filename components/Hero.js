import Image from "next/image";
import Button from "./Button";
import { HeroContent } from "@/content/Hero";
import Link from "next/link";
import { DotBig, DotSmall } from "./Dot";

export default function Hero() {
  const headers = ["DevOps", "Software Developer"];
  const link_style = "underline underline-offset-2 hover:text-blue-800";
  const paragraph = () => {
    return (
      <>
        I am currently focusing on frontned development in{" "}
        <Link href="https://nextjs.org">
          <a className={link_style}>Next.js</a>
        </Link>
        &nbsp;using&nbsp;
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
      <section className="text-gray-600 min-h-screen mx-auto flex items-center justify-center max-w-[80rem]">
        <div className="flex md:flex-row flex-col items-center w-full">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center space-y-4">
            {headers.map((header, index) => {
              return (
                <h1 key={index} className="sm:text-6xl text-3xl text-white">
                  {header}
                  <DotSmall />
                </h1>
              );
            })}

            <p className="py-6 text-2xl text-gray-400">{paragraph()}</p>
            <div className="flex justify-center">
              <Button title="Get resume" href="#" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
            <Image
              className="object-cover object-center rounded"
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
