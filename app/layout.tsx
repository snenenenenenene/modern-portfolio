import { ReactNode } from "react";
import { Navbar } from "./components/common/Navbar";
import "./globals.css";

export const metadata = {
  title: "Senne Bels",
  description: "Your local frontend developer",
  icons: {
    icon: "/public/assets/lynx.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen scroll-smooth overflow-x-hidden text-light-secondary dark:text-dark-secondary flex flex-col bg-light-primary dark:bg-dark-primary">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
