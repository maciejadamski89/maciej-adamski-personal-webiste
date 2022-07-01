import Navlink from "./Navlink";

export default function Items() {
  return (
    <>
      <div>
        <ul className="items-center hidden space-x-6 lg:flex">
          <Navlink name="Home" />
          <li>
            <a href="#about" className="hover:py-2 hover:border-b-4">
              AboutMe
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:py-2 hover:border-b-4">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="hover:py-2 hover:border-b-4">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="hover:py-2 hover:border-b-4">
              Awards
            </a>
          </li>
          <li>
            <a href="#" className="hover:py-2 hover:border-b-4">
              Certs
            </a>
          </li>
          <li>
            <a href="#" className="hover:py-2 hover:border-b-4">
              Contact
            </a>
          </li>
          <a href="http://maciejadamski89.pl/resume_maciej_adamski.pdf">
            <button className="px-6 py-2 font-bold bg-blue-800 rounded-2xl hover:bg-blue-900">
              Get Resume
            </button>
          </a>
        </ul>
      </div>
    </>
  );
}
