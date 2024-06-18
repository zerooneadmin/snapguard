import { Inter } from "next/font/google";
import "./globals.css";
import Footer, { footer } from "@/components/footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnapGuard",
  description:
    "Ultimate Solution for Screenshot and Screen Recording Protection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
