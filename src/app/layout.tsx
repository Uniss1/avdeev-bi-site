import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Avdeev — Data Engineer / BI Analyst",
  description: "Personal site and blog — data engineering, BI, and learning in public.",
  metadataBase: new URL("https://avdeev-bi.pro"),
  openGraph: {
    title: "Avdeev — Data Engineer / BI Analyst",
    description: "Personal site and blog — data engineering, BI, and learning in public.",
    url: "https://avdeev-bi.pro",
    siteName: "Avdeev",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <Header />
        <main className="mx-auto w-full max-w-5xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
