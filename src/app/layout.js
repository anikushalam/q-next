import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import GTM from "@/components/gtm/gtmComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qviple ERP | School Management Software | LMS - Qviple",
  description:
    "All-in-one institute management: Whether you're a large university or a small school, Qviple automates your administration processes. Book a demo now!",
  icons: {
    icon: "/images/newLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/images/newLogo.svg" sizes="any" />
        <Suspense>
          <GTM />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
