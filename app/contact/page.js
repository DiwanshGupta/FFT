import React from "react";
import Navbar from "../components/navbar";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="h-screen p-10 mt-10 md:mt-0 flex flex-col items-center justify-center">
          <div className=" items-center justify-center flex  flex-col">
            <div className=" justify-center block">
              <div className="contentpara  ">
                <div className="face">
                  <div className="eyebrow">︶</div>
                  <div className="tear2 absolute"></div>
                  <div className="eyebrow">︶</div>
                  <div className="tear absolute"></div>
                  <div className="eye"></div>
                  <div className="eye"></div>
                  <div className="mouth"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-4xl font-semibold text-white">
            {" "}
            Sorry for inconvinence
          </div>{" "}
          <div className="text-3xl font-semibold text-white">
            Till connect with us{" "}
          </div>
          <div className="text-3xl">
            {" "}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
