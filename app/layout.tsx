import type { Metadata } from "next";
import { Faculty_Glyphic } from "next/font/google";
import "./globals.css";

const facultyGlyphic = Faculty_Glyphic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Box Of Wellness",
  description: "Healthy and affordable food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={facultyGlyphic.className}>{children}</body>
    </html>
  );
}
