import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/header/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dikshit Bhardwaj",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
