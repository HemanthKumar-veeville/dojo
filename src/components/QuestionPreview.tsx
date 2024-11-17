import React from "react";

interface Question {
  id: string;
  title: string;
  description: string;
  type: "coding" | "mcq" | "descriptive";
  options?: string[];
  testCases?: { input: string; output: string }[];
}

interface QuestionPreviewProps {
  question: Question;
}

const QuestionPreview: React.FC<QuestionPreviewProps> = ({ question }) => {
  return (
    <div className="bg-darkRed p-6 rounded border border-gray-600">
      <h1 className="text-2xl font-bold text-lightRed mb-4">
        {question.title}
      </h1>
      <p className="text-sm text-gray-200 mb-6">{question.description}</p>

      {question.type === "mcq" && question.options && (
        <div>
          <h3 className="text-lg font-semibold text-lightRed">Options:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {question.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}

      {question.type === "coding" && question.testCases && (
        <div>
          <h3 className="text-lg font-semibold text-lightRed">Test Cases:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {question.testCases.map((testCase, index) => (
              <li key={index}>
                Input: {testCase.input}, Output: {testCase.output}
              </li>
            ))}
          </ul>
        </div>
      )}

      {question.type === "descriptive" && (
        <p className="text-gray-300">
          This is a descriptive question. Provide detailed answers.
        </p>
      )}
    </div>
  );
};

export default QuestionPreview;
