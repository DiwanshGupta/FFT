import React from "react";

const Notes = () => {
  return (
    <div className="p-10 text-white">
      <div className="text-2xl font-semibold">Notes</div>
      <span className="text-3xl font-bold">Bachelor OF Technology</span>
      <div className="flex flex-row justify-between">
        <div className="text-xl font-semibold bg-opacity-10 w-4/5 md:w-1/3 m-6 rounded-3xl">
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40 rounded-t-2xl   border-b   transition-transform  transform scale-100 hover:scale-110 hover:z-10">
            Communication Skills
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40    border-b transition-transform  transform scale-100 hover:scale-110 hover:z-10">
            Applied Chemistry
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40  transition-transform  transform scale-100   border-b hover:scale-110 hover:z-10">
            Applied Physics I
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40  transition-transform  transform scale-100    border-b hover:scale-110 hover:z-10">
            Electrical Science
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40  transition-transform  transform scale-100   border-b hover:scale-110 hover:z-10">
            Indian Constitution
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40  transition-transform  transform scale-100   border-b hover:scale-110 hover:z-10">
            Environmental Studies
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40  transition-transform  transform scale-100   border-b  hover:scale-110 hover:z-10">
            Applied Mathematics I
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40  transition-transform  transform scale-100   border-b hover:scale-110 hover:z-10">
            Programming in C
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40    border-b transition-transform  transform scale-100 hover:scale-110 hover:z-10">
            Basic Chemistry
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white bg-opacity-40   border-b transition-transform  transform scale-100 hover:scale-110 hover:z-10">
            Human Values And Ethics
          </div>
          <div className="py-5  justify-center items-center flex text-white bg-white rounded-b-2xl bg-opacity-40  transition-transform  transform scale-100 hover:scale-110 hover:z-10">
            Manufacturing process
          </div>
        </div>
        <div className="hidden md:block">
          <img src="White_Creative_Doodle_Brainstormin.png" />
        </div>
      </div>
    </div>
  );
};

export default Notes;
