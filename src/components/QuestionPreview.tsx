import React from "react";
import { Question } from "../types";

interface QuestionPreviewProps {
  question: Question;
}

const QuestionPreview: React.FC<QuestionPreviewProps> = ({ question }) => {
  return (
    <div className="p-4 bg-darkMaroon rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{question.title}</h2>
      <p className="mb-4">{question.description}</p>
      <h3 className="text-lg font-semibold mb-2">Test Cases:</h3>
      <ul className="list-disc list-inside space-y-2">
        {question.testCases?.map((testCase, index) => (
          <li key={index}>
            <strong>Input:</strong> {testCase.input} <br />
            <strong>Output:</strong> {testCase.output}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPreview;
