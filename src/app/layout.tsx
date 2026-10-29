import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rukvith Reddy Challa — Portfolio",
  description:
    "I build things I wish existed. Personal portfolio of Rukvith Reddy Challa — MD, USA.",
  metadataBase: new URL("https://rukvith21.github.io/personal-portfolio"),
  openGraph: {
    title: "Rukvith Reddy Challa",
    description: "I build things I wish existed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
