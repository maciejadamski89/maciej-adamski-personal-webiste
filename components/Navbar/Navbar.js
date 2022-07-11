import Brand from "./Brand";
import Items from "./Items";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="md:fixed top-0 left-0 right-0 z-10 flex items-center justify-between xl:max-w-7xl w-full p-4 sm:p-8 mx-auto bg-[#181818]">
          <Brand />
          <Items />
          <div className="lg:hidden">
            <Button title="Contact" href="#contact" />
          </div>
        </nav>
      </header>
    </>
  );
}
