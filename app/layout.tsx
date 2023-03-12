import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "./components/common/Navbar";
import "./globals.css";

export const metadata = {
  openGraph: {
    title: "Senne Bels",
    description: "Your favourite frontend developer",
    url: "https://www.sennebels.xyz",
    images: [
      {
        url: "https://sennebels.xyz/assets/images/twitter-pic.png",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* <Head /> */}
      <Head>
        <link rel="shortcut icon" href="assets/sun.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="sennebels.xyz" />
        <meta
          name="twitter:description"
          content="Your favourite frontend developer"
        />
        <meta
          name="twitter:image"
          content="https://sennebels.xyz/assets/images/twitter-pic.png"
        />
      </Head>
      <body>
        <div className="w-screen scroll-smooth overflow-x-hidden text-light-secondary dark:text-dark-secondary flex flex-col bg-light-primary dark:bg-dark-primary">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
