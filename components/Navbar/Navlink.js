export default function Navlink({ name, url }) {
  return (
    <>
      <li className="text-gray-100 hover:text-gray-300">
        <a href={url} className="hover:py-2 hover:border-b-4 border-blue-600 ">
          {name}
        </a>
      </li>
    </>
  );
}
