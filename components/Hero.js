import Image from "next/image";
import Button from "./Button";
import { HeroContent } from "@/content/Hero";
import { DotBig, DotSmall } from "./Dot";

export default function Hero() {
  const { headers, paragraph } = HeroContent();

  return (
    <>
      <section className="text-gray-600 body-font h-screen">
        <div className="container flex flex-col items-center py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:items-start md:text-left md:mb-0">
            {headers.map((header, index) => {
              return (
                <h1
                  key={index}
                  className="my-2 text-3xl leading-tight xl:text-7xl text-white"
                >
                  {header}
                  <DotSmall />
                </h1>
              );
            })}

            <p className="py-6 text-xl text-gray-400">{paragraph}</p>
            <div className="flex justify-center">
              <Button title="Get resume" href="#" />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full flex items-center justify-center">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width="300px"
              height="500px"
              src="/profile.jpg"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
