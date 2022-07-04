import Link from "next/link";
import { BrandContent } from "../../content/Brand";

const brand_name = BrandContent()[0].name;
const brand_href = BrandContent()[0].url;

export default function Brand() {
  return (
    <>
      <div className="text-lg font-bold text-white hover:text-slate-400">
        <Link href={brand_href}>
          <a>{brand_name}</a>
        </Link>
      </div>
    </>
  );
}
