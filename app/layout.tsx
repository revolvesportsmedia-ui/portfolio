import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advay Jariwala",
  description:
    "Portfolio of Advay Jariwala — builder, creator, and student at UIUC studying Information Sciences & Data Science.",
  openGraph: {
    title: "Advay Jariwala",
    description:
      "Building products at the intersection of data, AI, and mobile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface">{children}</body>
    </html>
  );
}
