import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/theme/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GrowwStonks",
  description: "A web application for stocks and etfs",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "w-screen min-h-screen overflow-y-scroll overflow-x-hidden bg-white text-black dark:bg-black dark:text-white"
        }
      >
        <Providers>
          <Navbar />
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
