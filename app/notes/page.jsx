"use client";
import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [subjects, setSubjects] = useState([]);

  const getdata = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSubjects(data.Btech);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="p-10 text-white">
      <div className="text-2xl font-semibold">Notes</div>
      <span className="text-3xl font-bold">Bachelor OF Technology</span>
      <div className="flex flex-row justify-between">
        <div className="text-xl font-semibold bg-opacity-10 w-4/5 md:w-1/3 m-6 rounded-3xl">
          {Object.keys(subjects).map((id, index, array) => (
            <div
              key={id}
              className={classNames(
                "py-5 justify-center items-center flex text-white bg-white bg-opacity-40 border-b transition-transform hover:scale-110 hover:z-10",
                {
                  "rounded-t-2xl": index === 0,
                  "rounded-b-2xl": index === array.length - 1,
                  "rounded-none": index !== 0 && index !== array.length - 1,
                }
              )}
            >
              <Link href={`/notes/${id}`} passHref>
                {subjects[id].Subject}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img src="White_Creative_Doodle_Brainstormin.png" />
        </div>
      </div>
    </div>
  );
};

export default Notes;
