import Navlink from "./Navlink";
import { NavbarContent } from "../../content/Navbar";

export default function Items() {
  const nav_items = NavbarContent();
  return (
    <>
      <div>
        <ul className="items-center hidden space-x-6 lg:flex">
          {nav_items.map((item, index) => {
            return <Navlink key={index} name={item.name} url={item.url} />;
          })}
        </ul>
      </div>
    </>
  );
}
