import { ReactNode } from "react";
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
      <body>{children}</body>
    </html>
  );
}
