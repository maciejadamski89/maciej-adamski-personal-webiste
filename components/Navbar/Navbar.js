import Brand from "./Brand";
import Items from "./Items";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between w-full max-w-7xl mx-auto py-8">
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
      </header>
    </>
  );
}
