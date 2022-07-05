export default function Navlink({ name, url }) {
  return (
    <>
      <li className="text-gray-100 hover:text-gray-300 text-lg">
        <a href={url} className="hover:py-2 hover:border-b-4 border-blue-800 ">
          {name}
        </a>
      </li>
    </>
  );
}
