import Link from "next/link";
import { BrandContent } from "../../content/Brand";

const brand_name = BrandContent()[0].name;
const brand_href = BrandContent()[0].url;

export default function Brand() {
  return (
    <>
      <div className="text-lg font-bold text-gray-100 hover:text-gray-300">
        <Link href={brand_href}>
          <a className="hover:py-2 hover:border-b-4 border-blue-800 ">
            {brand_name}
          </a>
        </Link>
      </div>
    </>
  );
}
