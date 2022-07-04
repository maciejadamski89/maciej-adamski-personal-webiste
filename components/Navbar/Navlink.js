export default function Navlink({ name, url }) {
  return (
    <>
      <li className="text-slate-400 hover:text-white">
        <a
          href={url}
          className="hover:py-2 hover:border-b-4 hover:color-white "
        >
          {name}
        </a>
      </li>
    </>
  );
}
