import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider"
import FixedDrawer from "./components/FixedDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mitsubishi Uganda",
  description: "Mitsubishi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <NavBar />
        <main className="max-w-full m-auto min-w-[240px] z-10 bg-black min-h-full overflow-hidden relative">{children}
        <FixedDrawer/>
        </main>
        <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}