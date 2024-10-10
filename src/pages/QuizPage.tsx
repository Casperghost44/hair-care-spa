import React from "react";
import { Link } from "react-router-dom";

const QuizPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="relative bg-[url('/background_img.jpeg')] w-full h-full max-h-[536px] bg-cover bg-center flex justify-center items-center">
        <div className="absolute inset-0 bg-black opacity-35">&nbsp;</div>

        <div className="relative flex flex-col gap-3 items-center">
          <h1 className="font-semibold text-4xl text-white text-center">
            Build a self care routine
            <br />
            suitable for you
          </h1>
          <span className="text-white font-[Proxima_Nova] text-center text-sm">
            Take out test to get a personalised self care
            <br />
            routine based on your needs.
          </span>
          <Link
            to="/question/1"
            className="px-9 py-3 bg-[#C3EDFF] rounded-lg font-semibold border-2 border-solid border-transparent transition-all hover:text-white hover:border-white hover:bg-transparent"
          >
            Start the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
