import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/section";
import Nav from "@/components/header/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dikshit Bhardwaj",
  description: "Port",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
