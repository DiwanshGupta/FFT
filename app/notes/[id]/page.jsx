"use client";
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
    <div className="p-1 mb-3">
      <h1 className="items-center flex justify-center font-bold text-2xl md:text-3xl">
        {subjectInfo.Subject}
      </h1>
      <div className="flex justify-between flex-col md:flex-row">
        {/* 

      <h2>Notes</h2>
      <h2>Aakash</h2>
      {subjectInfo.Notes.units1.notes1}

      <a href={subjectInfo.Aakash} target="_blank" rel="noopener noreferrer">
        Aakash Link
      </a> */}

        <div className="md:flex md:flex-col hidden ">
          <span>Notes</span>
          <span>Aakash</span>
          <span>Youtube Lecture</span>
        </div>
        <div
          id="style-1"
          className="md:w-2/6 overflow-auto h-screen p-5 mx-4 rounded-2xl bg-yellow-400  text-white font-semibold bg-opacity-25"
        >
          <h2 className="justify-center flex text-3xl ">Syllabus</h2>
          <p>{subjectInfo.syllabus}</p>
        </div>
      </div>
    </div>
  );
};

export default SubjectNotes;
