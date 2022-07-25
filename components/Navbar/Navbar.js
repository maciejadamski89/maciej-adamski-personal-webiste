import Brand from "./Brand";
import Items from "./Items";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <header>
      <nav className="top-0 left-0 right-0 z-50 flex items-center justify-between w-full p-8 mx-auto md:fixed xl:max-w-7xl bg-dark">
        <Brand />
        <Items />

        {/* Mobile */}
        <div className="lg:hidden">
          <Button title="Contact" href="#contact" />
        </div>
        {/* Mobile */}
      </nav>
    </header>
  );
}
