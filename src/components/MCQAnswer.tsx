import React from "react";

interface MCQAnswerProps {
  options: string[];
  selected: string | null;
  onChange: (option: string) => void;
}

const MCQAnswer: React.FC<MCQAnswerProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Select an answer:</h3>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li
            key={index}
            className={`p-3 rounded cursor-pointer ${
              selected === option
                ? "bg-lightRed text-white"
                : "bg-mediumRed text-gray-200"
            }`}
            onClick={() => onChange(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQAnswer;
