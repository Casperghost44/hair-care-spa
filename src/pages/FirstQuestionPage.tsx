import React from "react";

const FirstQuestionPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#1C2635] font-medium text-3xl text-center">
          What's your hair type or texture?
        </h1>
        <div className="grid grid-cols-4 gap-x-2">
          <div className="w-full border-1 border-solid border-[#5BC1ED] rounded-lg"></div>
          <div className="w-full border-1 border-solid border-[#5BC1ED] rounded-lg"></div>
          <div className="w-full border-1 border-solid border-[#5BC1ED] rounded-lg"></div>
          <div className="w-full border-1 border-solid border-[#5BC1ED] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FirstQuestionPage;
