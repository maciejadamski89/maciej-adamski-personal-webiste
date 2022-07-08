import { DotSmall } from "./Dot";

export default function About() {
  const link_style = "underline underline-offset-2 hover:text-blue-800";
  return (
    <>
      <section
        id="experience"
        className="flex flex-col max-w-4xl mx-auto space-y-8 text-center mt-52"
      >
        <h2 className="text-white">
          I worked for
          <DotSmall />
        </h2>
        <p className="text-gray-400 2xl:text-2xl">
          <a href="https://www.nomachine.com/" className={link_style}>
            NoMachine
          </a>{" "}
          as C++ Developer
          <br></br>
        </p>
        <p className="text-gray-400 2xl:text-2xl">
          <a href="https://www.ibm.com/" className={link_style}>
            IBM
          </a>{" "}
          as DevOps Leader
          <br></br>
        </p>
        <p className="text-gray-400 2xl:text-2xl">
          <a href="https://www.kyndryl.com/" className={link_style}>
            Kyndryl
          </a>{" "}
          as Software Developer - (currently)
          <br></br>
        </p>
      </section>
    </>
  );
}
