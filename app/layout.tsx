import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Mostafa | Computer Engineering Student & ML Enthusiast",
  description:
    "Personal portfolio of Ahmed Mostafa, a third-year Computer Engineering student at Ain Shams University passionate about Data Science, Machine Learning, and building data-driven solutions.",
  keywords: [
    "Ahmed Mostafa",
    "Computer Engineering",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Ain Shams University",
  ],
  openGraph: {
    title: "Ahmed Mostafa | Portfolio",
    description:
      "A passionate Computer Engineering student building intelligent, data-driven solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
