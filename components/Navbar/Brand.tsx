import Link from "next/link";

const brandName = "Maciej Adamski";

export default function Brand() {
	return (
		<>
			<div className="text-xl font-bold text-gray-100 hover:text-gray-300">
				<Link href="/">{brandName}</Link>
			</div>
		</>
	);
}
