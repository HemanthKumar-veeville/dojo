import React from "react";
import { Question } from "../types";

interface QuestionListProps {
  onSelectQuestion: (question: Question) => void;
}

// Updated mock data to include testCases
const mockQuestions: Question[] = [
  {
    id: "1",
    title: "Anagram Checker",
    description: "Check if two strings are anagrams of each other.",
    testCases: [
      { input: "listen, silent", output: "true" },
      { input: "hello, world", output: "false" },
    ],
  },
  {
    id: "2",
    title: "Palindrome Detector",
    description: "Determine if a string is a palindrome.",
    testCases: [
      { input: "radar", output: "true" },
      { input: "hello", output: "false" },
    ],
  },
  {
    id: "3",
    title: "Fibonacci Generator",
    description: "Generate the first n Fibonacci numbers.",
    testCases: [
      { input: "5", output: "0, 1, 1, 2, 3" },
      { input: "7", output: "0, 1, 1, 2, 3, 5, 8" },
    ],
  },
];

const QuestionList: React.FC<QuestionListProps> = ({ onSelectQuestion }) => {
  return (
    <ul className="space-y-2">
      {mockQuestions.map((question) => (
        <li
          key={question.id}
          className="cursor-pointer bg-mediumRed hover:bg-lightRed text-white p-3 rounded"
          onClick={() => onSelectQuestion(question)}
        >
          <h3 className="font-bold">{question.title}</h3>
          <p className="text-sm text-gray-200">{question.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
