import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-orange-500 bg-opacity-80 rounded-t-2xl shadow mb-0 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              FFT
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
            <li>
              <Link
                href="https://www.youtube.com/channel/UCdqZfm7wOczjQV7QS9oL5Vg"
                className="hover:underline "
              >
                <div className="text-3xl mx-5 w-6">
                  <FontAwesomeIcon
                    className="hover:text-red-600 hover:bg-transparent "
                    icon={faYoutube}
                  />
                </div>
              </Link>
            </li>

            <li>
              <Link
                href="https://chat.whatsapp.com/BaKiWbk4dWX7JhmXqJJEfr"
                className="hover:underline "
              >
                <div className="text-3xl mx-5 w-6">
                  <FontAwesomeIcon
                    className="hover:text-green-600 hover:bg-transparent "
                    icon={faWhatsapp}
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/15forteen?igshid=MzRlODBiNWFlZA"
                className="hover:underline"
              >
                <div className="text-2xl mx-5 w-5">
                  <FontAwesomeIcon
                    className="hover:text-pink-500 hover:bg-transparent "
                    icon={faInstagram}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
