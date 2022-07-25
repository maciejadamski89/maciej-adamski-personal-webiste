import { Dot } from "./Dot";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col max-w-4xl px-4 pt-32 mx-auto space-y-8 text-center lg:pt-52"
    >
      <h2 className="text-4xl text-white">
        I worked for
        <Dot />
      </h2>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="https://www.nomachine.com/" className="link">
          NoMachine
        </a>{" "}
        as C++ Developer
        <br></br>
      </p>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="https://www.ibm.com/" className="link">
          IBM
        </a>{" "}
        as DevOps Leader
        <br></br>
      </p>
      <p className="text-lg text-gray-400 2xl:text-2xl">
        <a href="https://www.kyndryl.com/" className="link">
          Kyndryl
        </a>{" "}
        as Software Developer - (currently)
        <br></br>
      </p>
    </section>
  );
}
