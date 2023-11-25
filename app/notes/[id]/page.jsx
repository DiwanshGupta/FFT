"use client";
import Sidebar from "@/app/components/sidebar";
import React, { useState, useEffect } from "react";

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
        <h1>Loading...</h1>
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
    <div className="p-1 mb-3 mt-28 md:mt-20 py-10">
      <h1 className="items-center flex justify-center font-bold md:font-semibold text-3xl md:text-4xl">
        {subjectInfo.Subject}
      </h1>
      <div className="flex justify-between flex-col  md:flex-row ">
        <div className="flex flex-col md:flex-row md:w-2/4 my-11 py-6">
          <div className="md:flex md:flex-col  ">
            <Sidebar />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non
            officiis magnam velit quibusdam corporis, temporibus alias explicabo
            quas repudiandae deleniti deserunt hic voluptate aut! Delectus
            facere magnam aliquid quaerat.
          </div>
        </div>
        <div
          id="style-1"
          className="md:w-2/6 overflow-auto slabh p-5 mx-4 rounded-2xl bg-yellow-400  text-white font-semibold bg-opacity-25"
        >
          <h2 className="justify-center flex text-3xl ">Syllabus</h2>
          {Object.keys(subjectInfo.syllabus).map((unit, index) => (
            <div key={index}>
              <p className="text-2xl my-3 font-bold">{`Units ${index + 1}`}</p>
              <p>{subjectInfo.syllabus[unit]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectNotes;
