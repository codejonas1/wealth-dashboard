export default function MainWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex-1 rounded-4xl">
            {children}
        </main>
    )
}