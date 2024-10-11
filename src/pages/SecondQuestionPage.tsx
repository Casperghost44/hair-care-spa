import React from "react";
import { Link } from "react-router-dom";
import questions from "../data/questions.json";

const SecondQuestionPage = () => {
  const data = questions[1];

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-[#1C2635] font-garamond font-medium text-3xl text-center max-w-[300px]">
          {data.question}
        </h1>
        <div className="grid grid-cols-5 gap-x-2">
          {data.answers.map((item: any) => (
            <div
              key={item.key}
              className="border border-solid text-[#1C2635] border-[#5BC1ED] rounded-lg pr-10 pl-3 py-3 transition-all hover:bg-[#5BC1ED] hover:text-white hover:cursor-pointer"
            >
              <span className="font-garamond text-inherit">
                {item.key}. {item.answer}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-6 font-sans items-center">
          <Link
            to="/question/1"
            className="border-b border-solid mb-1 border-[#677487] text-[#677487] transition-all hover:border-transparent"
          >
            Back
          </Link>
          <button className="flex items-center gap-2 px-7 py-2 bg-[#C3EDFF] rounded-lg font-medium transition-all hover:bg-[#5BC1ED]">
            Next Question{" "}
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_55)">
                <path
                  d="M13.8517 5.38135L17.7527 9.28229L1.21736 9.28219L1.21736 10.7174L17.7527 10.7173L13.8517 14.6183L14.8666 15.6332L20.5 9.9998L14.8666 4.36643L13.8517 5.38135Z"
                  fill="#1C2635"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_55">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondQuestionPage;
