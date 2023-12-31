import React from "react";

const SkeletonLoader = () => {
  return (
    <div>
      <div className="flex space-x-2 justify-center items-center  h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-blue-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-blue-600 rounded-full animate-bounce"></div>
      </div>
      <div className="area h-screen">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SkeletonLoader;