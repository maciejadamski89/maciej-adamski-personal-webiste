import Hero from "@/components/Hero";

const title = "Maciej Adamski";
const description = "Portfolio website of Maciej Adamski - Software Developer";

export const metadata = {
	title: title,
	description: description,
};

export default function Home() {
	return (
		<>
			<Hero />
		</>
	);
}
