"use client";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

import {Inter} from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

function GradientBlurBackground() {
	return (
		<div className="absolute top-0 left-0 w-full rounded-md opacity-50 h-96 bg-gradient-to-br from-indigo-800 to-indigo-950 filter blur-3xl -z-50"></div>
	);
}
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased bg-dark h-full`}>
				<TransitionEffect />
				<Navbar />
				<GradientBlurBackground />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
