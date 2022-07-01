import Link from "next/link";

const brand_name = "maciej.adamski";

const style = `
    text-lg 
    font-bold 
    hover:text-white 
    text-slate-400
`;

const href = "/";

export default function Brand() {
  return (
    <>
      <div className={style}>
        <Link href={href}>{brand_name}</Link>
      </div>
    </>
  );
}
