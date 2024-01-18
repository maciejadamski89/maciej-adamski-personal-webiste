import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" className="h-full">
			<body className={`${GeistMono.className} antialiased bg-dark min-h-full`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
