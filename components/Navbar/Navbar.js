import Brand from "./Brand";
import Items from "./Items";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between w-full px-40 py-8 mx-auto bg-[#181818]">
          <Brand />
          <Items />
          <div className="flex items-center lg:hidden">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLnejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
        <nav className="z-50 block md:hidden">
          <div className="fixed bottom-0 left-0 right-0 bg-neutral-900">
            <div className="grid grid-cols-4 h-[80px] gap-1 px-1 ">
              <a
                href="#experience"
                className="flex items-center justify-center text-sm bg-blue-900"
              >
                <p>Experience</p>
              </a>
              <a
                href="#skills"
                className="flex items-center justify-center text-sm bg-blue-900"
              >
                <p>Skills</p>
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center text-sm bg-blue-900"
              >
                <p>Projects</p>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center text-sm bg-blue-900"
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
