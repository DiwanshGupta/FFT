import Link from "next/link";
import React from "react";

const Course = () => {
  return (
    <div className="h-screen p-7">
      <div className=" text-3xl text-white md:text-4xl font-semibold ">
        Courses
      </div>
      <div className="flex justify-start flex-col items-center md:flex-row">
        <div className="flex flex-col mt-7 justify-start w-40  ">
          <span className="text-2xl text-white font-semibold justify-center transition-transform flex p-16 transform scale-100 hover:scale-110 hover:bg-opacity-10 hover:text-white rounded-full bg-white bg-opacity-25">
            B.Tech
          </span>

          <span className="items-center text-white justify-center text-base my-4 flex font-semibold">
            Bachelor of Technology
          </span>
          <span className="  flex  items-center justify-center">
            <Link href="/notes">
              {" "}
              <button className="text-2xl text-white p-5 justify-center bg-white bg-opacity-25 w-full rounded-lg transition-transform hover:bg-opacity-10 transform scale-100 hover:scale-110 hover:z-10">
                lets go
              </button>
            </Link>
          </span>
        </div>
        <div className="flex flex-col mt-7  text-white   w-40 mx-4 justify-center">
          <span className="text-3xl justify-center  rounded-full p-16 items-center flex bg-white bg-opacity-25">
            +
          </span>
          <span className="justify-center flex">Coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default Course;
