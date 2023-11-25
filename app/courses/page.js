import Link from "next/link";
import React from "react";

const Course = () => {
  return (
    <div className="h-screen p-7 mt-20">
      <div className=" text-3xl text-white md:text-4xl font-semibold ">
        Courses
      </div>
      <div className="flex justify-start flex-col items-center md:flex-row">
        <div className="flex flex-col mt-7 justify-start w-40  ">
          <Link href="/notes">
            <span className="text-2xl text-white font-semibold justify-center  flex p-16 transition-transform hover:scale-105 hover:z-10 hover:bg-opacity-10 hover:text-white  rounded-full bg-white bg-opacity-25">
              B.Tech
            </span>
          </Link>

          <span className="items-center text-white justify-center text-base my-4 flex font-semibold">
            <p className="items-center justify-center flex">
              Bachelor of Technology
            </p>
          </span>
          <span className="  flex  items-center justify-center">
            <Link href="/notes">
              {" "}
              <button className="text-2xl text-white p-1  justify-center bg-white bg-opacity-25 w-44 rounded-lg transition-transform hover:bg-opacity-10 transform  hover:scale-105 hover:z-10">
                lets go
              </button>
            </Link>
          </span>
        </div>
        <div className="flex flex-col mt-7  text-white   w-40 mx-4 justify-center">
          <span className="justify-center flex">Coming soon...</span>
        </div>
      </div>
    </div>
  );
};

export default Course;
