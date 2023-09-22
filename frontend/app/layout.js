import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/section";
import Nav from "@/components/header/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dikshit Bhardwaj",
  description:
    "As a highly skilled web developer with two years of experience, I have honed my skills in web design, Javascript, Node.js, Express, React.js, and Python. I am an expert in creating responsive and user-friendly websites that are visually appealing and efficient.With my extensive knowledge of front-end and back-end web development, I am able to seamlessly integrate all the necessary components to create a smooth and engaging user experience. Whether it's developing a custom web application, building an e-commerce site, or designing a responsive website, I have the skills and expertise to get the job done.",
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
