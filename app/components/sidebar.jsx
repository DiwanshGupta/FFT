"use client";
import {
  faFile,
  faFilePdf,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavData = [
  {
    name: "NOTES",
    path: "#",
    icon: <FontAwesomeIcon icon={faStickyNote} />,
  },
  {
    name: "Youtube",
    path: "https://www.youtube.com/@15FORTEEN",
    icon: <FontAwesomeIcon icon={faYoutube} />,
  },
  {
    name: "PYQ's",
    path: "#",
    icon: <FontAwesomeIcon icon={faFile} />,
  },
];

// Rest of the component remains the same

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="flex md:bottom-0 p-6 md:p-0 items-center md:justify-center w-full md:w-16 md:max-w-md md:h-screen">
      <div className="flex w-full rounded-xl md:mx-2 md:flex-col items-center justify-between xl:justify-center gap-y-10 px-4  md:px-0 h-[80px] md:h-max py-8 bg-white bg-opacity-50 text-orange-600  text-3xl xl:text-xl xl:rounded-xl">
        {NavData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            }  flex flex-col items-center group hover:text-orange-800 transition-all duration-300`}
            href={link.path}
            key={index}
          >
            <div>{link.icon}</div>{" "}
            <div className="  items-center  p-1  ">
              <div className="text-[12px] leading-none font-semibold capitalize text-blue-900">
                {link.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
