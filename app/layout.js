import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "15ForTeen",
  description: "Generated by 15ForTeen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className bgimg `}>
        <div className="my-10 md:p-8 mt-4  ">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}