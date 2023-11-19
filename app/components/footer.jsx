import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-cyan-900 rounded-lg shadow mb-0 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              FFT
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                href="https://www.youtube.com/channel/UCdqZfm7wOczjQV7QS9oL5Vg"
                className="hover:underline me-4 md:me-6"
              >
                youtube
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/15forteen?igshid=MzRlODBiNWFlZA"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://chat.whatsapp.com/BaKiWbk4dWX7JhmXqJJEfr"
                className="hover:underline me-4 md:me-6"
              >
                whatsapp
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
