import Link from "next/link";
import { DotSmall } from "../Dot";

export default function Brand() {
  return (
    <>
      <div className="text-lg font-bold text-gray-100 hover:text-gray-300">
        <Link href="/">
          <a>
            Maciej Adamski
            <DotSmall />
          </a>
        </Link>
      </div>
    </>
  );
}
