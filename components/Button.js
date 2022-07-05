export default function Button({ title, href }) {
  return (
    <a href={href}>
      <button className="px-8 py-3 text-white bg-blue-800 rounded-2xl hover:bg-blue-900">
        {title}
      </button>
    </a>
  );
}
