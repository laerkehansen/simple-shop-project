import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../app/img/logo.svg";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white grid grid-cols-[1fr_1fr_2fr_3fr_1fr_1fr] grid-rows-[auto_auto_auto]`}
      >
        {children}
        <footer className="bg-primary-black rounded-t-lg col-start-2 col-end-6 grid">
          <div className="flex justify-between pt-14 pb-14 pr-6 pl-6">
            <div>
              <Image src={Logo} alt="hej" />
            </div>
            <div>
              <h2 className=" text-2xl">Contact us</h2>
              <p>Phone: 33113311</p>
              <p>Location: Copenhagen</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Website</h2>
              <a href="#">Home</a>
              <a href="#">Products</a>
            </div>
            <div>
              <h2 className="text-2xl">Newsletter</h2>

              <input type="text" />

              <div className="flex">
                <input type="checkbox" />
                <p>I accept the terms Read terms</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
