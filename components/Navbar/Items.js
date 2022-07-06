import Navlink from "./Navlink";
import { NavbarContent } from "../../content/Navbar";

export default function Items() {
  const nav_items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
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
