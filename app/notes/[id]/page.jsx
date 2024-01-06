"use client";
import Sidebar from "@/app/components/sidebar";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import SkeletonLoader from "@/app/components/skelton";

const SubjectNotes = ({ params }) => {
  const { id } = params;
  const [subjectData, setSubjectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data.json`);
        const data = await response.json();
        setSubjectData(data.Btech);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!subjectData) {
    return (
      <div>
        <h1>
          <div>
            <SkeletonLoader />
          </div>
        </h1>
      </div>
    );
  }

  const subjectInfo = subjectData[id];

  if (!subjectInfo) {
    return (
      <div>
        <h1>Subject Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-1 mb-3 mt-28 md:mt-20 py-10">
        <h1 className="items-center flex justify-center font-bold md:font-semibold text-3xl md:text-4xl">
          {subjectInfo.Subject}
        </h1>
        <div className="flex justify-between flex-col  md:flex-row ">
          <div className="flex flex-col md:flex-row md:w-2/4 my-11 py-6">
            <div className="md:flex md:flex-col  ">
              <Sidebar />
            </div>
            <div className="m-2 md:w-3/4 ">
              <div className="w-full">
                {Object.keys(subjectInfo.Notes).map((unit, index) => (
                  <div key={index} className="flex flex-col md:w-2/3 ">
                    <div>
                      <p className="text-2xl my-3 font-bold">{`${
                        Object.keys(subjectInfo.Notes).length === 1
                          ? "All Units"
                          : `Unit ${index + 1}`
                      }`}</p>
                    </div>
                    <div className="flex  items-center justify-center ">
                      {Object.keys(subjectInfo.Notes[unit]).map(
                        (noteKey, noteIndex) => (
                          <Link
                            href={subjectInfo.Notes[unit][noteKey]}
                            key={noteIndex}
                          >
                            <div>
                              <div className="notes-link">
                                <p className="text-xl  font-semibold">{`Notes ${
                                  index + 1
                                }`}</p>{" "}
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                    {subjectInfo["Must do"] && (
                      <div id="must-do">
                        <div className="flex flex-col  ">
                          <div>
                            <p className="text-2xl my-3 font-bold">Must Do</p>
                          </div>
                          <div className="flex content-center items-center justify-center ">
                            <Link href={subjectInfo["Must do"].pdf}>
                              <div className="notes-link">
                                <p className="text-xl font-semibold">Must Do</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                    {subjectInfo["Most-Repeated"] && (
                      <div id="most-repeated">
                        <div className="flex flex-col  ">
                          <div>
                            <p className="text-2xl my-3 font-bold">
                              Most-Repeated
                            </p>
                          </div>
                          <div className="flex content-center items-center justify-center ">
                            <Link href={subjectInfo["Most-Repeated"].pdf}>
                              <div className="notes-link">
                                <p className="text-xl font-semibold">
                                  Most-Repeated
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div id="pyq">
                  <div className="flex flex-col md:w-2/3 ">
                    <div>
                      <p className="text-2xl my-3 font-bold">PYQ</p>
                    </div>
                    <div className="flex content-center items-center justify-center ">
                      <Link href={subjectInfo.Aakash}>
                        <div>
                          <div className="notes-link">
                            <p className="text-xl font-semibold">
                              Last Year Previous
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="style-1"
            className="md:w-2/6 overflow-auto slabh p-5 mx-4 rounded-2xl bg-yellow-400  text-white font-semibold bg-opacity-25"
          >
            <h2 className="justify-center flex text-3xl ">Syllabus</h2>
            {Object.keys(subjectInfo.syllabus).map((unit, index) => (
              <div key={index}>
                <p className="text-2xl my-3 font-bold">{`Units ${
                  index + 1
                }`}</p>
                <p>{subjectInfo.syllabus[unit]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectNotes;

