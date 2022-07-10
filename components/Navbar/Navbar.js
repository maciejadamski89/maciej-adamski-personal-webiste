import Brand from "./Brand";
import Items from "./Items";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="md:fixed top-0 left-0 right-0 z-10 flex items-center justify-center md:justify-between w-full lg:px-40 py-8 mx-auto bg-[#181818]">
          <Brand />
          <Items />
        </nav>

        {/* Mobile Navbar */}
        <nav className="z-50 block md:hidden">
          <div className="fixed bottom-0 left-0 right-0 bg-neutral-900">
            <div className="grid grid-cols-4 h-[80px] gap-1 px-1 ">
              <a
                href="#experience"
                className="flex items-center justify-center text-sm bg-blue-900 rounded-lg"
              >
                <p>Experience</p>
              </a>
              <a
                href="#skills"
                className="flex items-center justify-center text-sm bg-blue-900 rounded-lg"
              >
                <p>Skills</p>
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center text-sm bg-blue-900 rounded-lg"
              >
                <p>Projects</p>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center text-sm bg-blue-900 rounded-lg"
              >
                <p>Contact</p>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
