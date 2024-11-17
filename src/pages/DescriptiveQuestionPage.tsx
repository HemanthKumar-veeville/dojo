import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const DescriptiveQuestionPage: React.FC = () => {
  const location = useLocation();
  const question = location.state;
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    console.log("Submitted Answer:", answer);
  };

  return (
    <div className="p-6 bg-darkRed min-h-screen text-white">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <p className="text-gray-300 my-4">{question.description}</p>
      <textarea
        className="w-full h-40 bg-darkRed text-white border border-gray-600 rounded p-2"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-mediumRed hover:bg-lightRed text-white font-bold py-2 px-4 rounded"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default DescriptiveQuestionPage;
