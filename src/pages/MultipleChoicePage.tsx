import React from "react";
import { useLocation } from "react-router-dom";

const MultipleChoicePage: React.FC = () => {
  const location = useLocation();
  const question = location.state;

  const handleSubmit = (selectedOption: string) => {
    console.log("Submitted Answer:", selectedOption);
  };

  return (
    <div className="p-6 bg-darkRed min-h-screen text-white">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <p className="text-gray-300 my-4">{question.description}</p>
      <ul className="space-y-2">
        {question.options?.map((option: string, index: number) => (
          <li
            key={index}
            className="cursor-pointer bg-mediumRed hover:bg-lightRed text-white p-3 rounded"
            onClick={() => handleSubmit(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoicePage;
