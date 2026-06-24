import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainWrapper from "@/components/layout/MainWrapper";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: "Wealth Dashboard",
	description: "A high-performance wealth tracking dashboard & portfolio simulator using Next.js, TypeScript, and clean engineering standards.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn("min-h-full", "antialiased", "font-sans", "flex", inter.variable)}
		>
			<body className="flex-1 flex m-5">
				<MainWrapper>
					{children}
				</MainWrapper>
			</body>
		</html>
	);
}
