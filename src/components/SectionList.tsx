import React from "react";

interface Question {
  id: string;
  title: string;
  description: string;
  type: "coding" | "mcq" | "descriptive";
  options?: string[]; // For MCQ questions
  testCases?: { input: string; output: string }[]; // For coding questions
}

interface Section {
  title: string;
  time: string; // Allotted time for the section
  questions: Question[];
}

interface SectionListProps {
  onSelectQuestion: (question: Question) => void;
}

// Mock data for sections and questions
const sections: Section[] = [
  {
    title: "Section 1: Fundamentals",
    time: "30 min",
    questions: [
      {
        id: "1",
        title: "Anagram Checker",
        description: "Check if two strings are anagrams.",
        type: "coding",
        testCases: [{ input: "abcd,dcba", output: "true" }],
      },
      {
        id: "2",
        title: "Basic Math MCQ",
        description: "Solve basic math problems.",
        type: "mcq",
        options: ["10", "20", "30", "40"],
      },
      {
        id: "3",
        title: "Explain Polymorphism",
        description: "Describe the concept of polymorphism in OOP.",
        type: "descriptive",
      },
    ],
  },
  {
    title: "Section 2: Advanced Topics",
    time: "45 min",
    questions: [
      {
        id: "4",
        title: "Graph Traversal",
        description: "Implement DFS and BFS on a graph.",
        type: "coding",
        testCases: [{ input: "graph-data", output: "traversal-result" }],
      },
      {
        id: "5",
        title: "Data Structures MCQ",
        description: "Identify the correct data structure for scenarios.",
        type: "mcq",
        options: ["Stack", "Queue", "Tree", "Graph"],
      },
    ],
  },
];

const SectionList: React.FC<SectionListProps> = ({ onSelectQuestion }) => {
  return (
    <div className="space-y-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-deepMaroon p-4 rounded shadow">
          <h2 className="text-xl font-bold text-lightRed mb-2">
            {section.title}
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Allotted Time: {section.time}
          </p>
          <ul className="space-y-2">
            {section.questions.map((question) => (
              <li
                key={question.id}
                className="cursor-pointer bg-mediumRed hover:bg-lightRed text-white p-3 rounded shadow"
                onClick={() => onSelectQuestion(question)}
              >
                <h3 className="font-bold">{question.title}</h3>
                <p className="text-sm text-gray-200">{question.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SectionList;
