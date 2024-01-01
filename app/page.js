"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SkeletonLoader from "./components/skelton";
import Navbar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    simulateLoading();
  }, []);

  return (
    <div>
      {loading ? (
        // Loading state
        <div>
          <SkeletonLoader />
        </div>
      ) : (
        // Content when loading is complete
        <div>
          <div>
            <Navbar />
          </div>
          <div className="flex flex-col  text-gray-900 md:flex-row items-center p-5 justify-between">
            <div className="md:w-2/4 flex items-center flex-col">
              <div className="md:hidden block md:w-2/4">
                <img src="5-removebg-preview.png" />
              </div>
              <div className="text-5xl font-bold text-gray-800">
                15 For Teen
              </div>
              <p className="text-base font-semibold my-4">
                Hey teens, we have created the YouTube channel to provide you
                right guidance towards your goal. We will make an impeccable
                effect in your personality and make you amenable in the field of
                education too. Here we will provide you Notes of the Lectures.
              </p>
              <div>
                <Link href="/courses">
                  <button className="btnhero">Courses</button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-2/4">
              <img src="5-removebg-preview.png" />
            </div>
          </div>
          <div className="flex items-center flex-col justify-center text-2xl font-bold">
            <div>FFT - Youtube Tutorial</div>
            <div className="flex justify-between -z-10">
              <div className="mx-2"> Click below</div>
              <div className="arrow bounce">
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </div>
              <div> </div>
            </div>
            <div className="text-9xl flex justify-center ">
              <Link href="https://www.youtube.com/channel/UCdqZfm7wOczjQV7QS9oL5Vg">
                {" "}
                <FontAwesomeIcon
                  className="hover:text-red-600 text-red-500 hover:bg-transparent "
                  icon={faYoutube}
                />
              </Link>
            </div>
          </div>
          <div className="p-4">
            <p className="text-lg text-gray-900 font-bold">
              We have come across with something extraordinary for the teens of
              15FORTEEN extravagant community 🤩🤩.!!We are thrilled to
              introduce something extraordinary that will surely elevate your
              success and make you unstoppable! ⏱👩‍🎓👨‍🎓🎖
              <br />
              <span className="text-lg font-semibold">
                Our mission is to provide you with the tools and resources to
                excel in your professional journey. Here&lsquo;s what we have in
                store for you:
                <br />✅ Placement readiness: We&lsquo;ll equip you with the
                skills and knowledge you need to ace those job interviews and
                secure your dream job.
                <br />✅ Personality enhancement: Discover ways to enhance your
                personal brand and make a lasting impression in any situation.
                <br />✅ Stay updated: Get the latest scoop on upcoming
                internships and job offers, so you never miss out on exciting
                opportunities.
                <br />✅ Motivation boost: We&lsquo;ll keep you motivated and
                inspired throughout your journey, because we believe in your
                potential!
                <br />✅ Knowledge expansion: Unlock tricks and tips to expand
                your knowledge base, and delve into various computing languages
                like C, C++, Java, and Python.
                <br />✅ Interview success: Prepare for success with our
                compilation of the most frequently asked interview questions and
                expert advice.
                <br />✅ Style and grooming: Learn the art of dressing for
                success and perfect grooming tips to make a remarkable
                impression.
                <br />✅ Skill development: Explore a wide range of development
                courses such as web development, app development, data science,
                and much more.
                <br />
                Wishing you all the best on your incredible journey. Remember,
                you&lsquo;ve got what it takes to rock the world! 🔥
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
