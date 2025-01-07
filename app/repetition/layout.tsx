import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Repeat Words",
    description: "Learning neyise",
};

export default function RepetitionLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>

    );
}