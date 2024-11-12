import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../app/img/logo.svg";
import Basket from "../app/img/basket.svg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <header className="">
          <nav className="flex bg-pink-200 text-pink-400 py-6 text-xl justify-between px-10">
            <Link href="/">
              <Image src={Logo} alt="logo af brandet" />
            </Link>
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <Image src={Basket} alt="illustration af kurv" />
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
