export default function Button({ title, href }) {
  return (
    <a href={href}>
      <button className="px-6 py-2 font-bold text-white bg-blue-800 rounded-2xl hover:bg-blue-900">
        {title}
      </button>
    </a>
  );
}
