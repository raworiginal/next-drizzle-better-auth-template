import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export const metadata: Metadata = {
	title: "Create CRUD App",
	description: "Create a Crud App with this template.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="fixed top-0 w-full bg-base-100 shadow-sm">
					<NavBar />
				</header>
				{children}
				<footer className="">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
