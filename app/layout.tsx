import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow dark:bg-gray-800">
          <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a
              href="/create"
              className="text-gray-800 dark:text-gray-200 border-b-2 mx-1.5 sm:mx-6"
            >
              Create Voucher
            </a>

            <a
              href="/"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Use Voucher
            </a>

           
          
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
