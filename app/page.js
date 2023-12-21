"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SkeletonLoader from "./components/skelton";
import Navbar from "./components/navbar";

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
          <div className="flex flex-col text-gray-900 md:flex-row items-center p-5 justify-between">
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
          <div className="p-4">
            <p className="text-lg text-gray-900 font-bold">
              Hey dear NEWAGE GROUP, we are going to start something new for you
              all, which will be adding glory to your success and make you
              impeccable ⏱👩‍🎓👨‍🎓🎖
              <br />
              <span className="text-lg font-semibold">
                Our mission is to:-
                <br />
                ✅Make you placement ready <br />
                ✅enhance your personality <br />
                ✅update about upcoming internships & job offers
                <br />
                ✅keeping you motivated
                <br />
                ✅tricks & tips to vast your knowledge
                <br />
                ✅various computing languages like C, C++, Java, python
                <br />
                ✅most asked interview questions
                <br />
                ✅dressing sense <br />
                ✅perfect grooming tips
                <br />
                ✅and various development courses like web dev, app dev, data
                science, and many more. Wishing you, All the best..keep
                rocking.!!🔥🔥
              </span>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
