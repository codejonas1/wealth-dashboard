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
			className={cn("h-full", "antialiased", "font-sans", inter.variable)}
		>
			<body className="min-h-full flex p-5">
				<MainWrapper>
					{children}
				</MainWrapper>
			</body>
		</html>
	);
}
