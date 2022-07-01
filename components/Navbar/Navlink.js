export default function Navlink({ name }) {
  const style = "hover:py-2 hover:border-b-4 hover:color-white color-white";

  return (
    <>
      <li className="text-slate-400 hover:text-white">
        <a href="#" className={style}>
          {name}
        </a>
      </li>
    </>
  );
}
