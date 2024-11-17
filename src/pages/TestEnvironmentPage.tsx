import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionList from "../components/SectionList";
import QuestionPreview from "../components/QuestionPreview";
import MCQAnswer from "../components/MCQAnswer";
import DescriptiveAnswer from "../components/DescriptiveAnswer";

interface Question {
  id: string;
  title: string;
  description: string;
  type: "coding" | "mcq" | "descriptive";
  options?: string[]; // For MCQ questions
  testCases?: { input: string; output: string }[]; // For coding questions
}

const TestEnvironmentPage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [mcqAnswer, setMcqAnswer] = useState<string | null>(null); // State to hold MCQ answers
  const [descriptiveAnswer, setDescriptiveAnswer] = useState<string>(""); // State to hold descriptive answers

  const navigate = useNavigate();

  const handleQuestionSelect = (question: Question) => {
    setSelectedQuestion(question);
    setMcqAnswer(null); // Reset MCQ answer
    setDescriptiveAnswer(""); // Reset descriptive answer
  };

  const handleSubmitAnswer = () => {
    console.log("Answer submitted:", {
      questionId: selectedQuestion?.id,
      answer: selectedQuestion?.type === "mcq" ? mcqAnswer : descriptiveAnswer,
    });
    alert("Answer submitted successfully!");
    setSelectedQuestion(null); // Clear the selected question
  };

  const handleStartSolving = () => {
    if (selectedQuestion?.type === "coding") {
      navigate("/editor", { state: selectedQuestion });
    }
  };

  return (
    <div className="flex min-h-screen bg-darkRed text-white">
      {/* Left Section: Section List */}
      <SectionList onSelectQuestion={handleQuestionSelect} />

      {/* Right Section: Question Preview or Answer Area */}
      <div className="w-2/3 p-4">
        {selectedQuestion ? (
          <>
            <QuestionPreview question={selectedQuestion} />
            {selectedQuestion.type === "coding" && (
              <button
                className="mt-4 bg-mediumRed hover:bg-lightRed text-white font-bold py-2 px-4 rounded"
                onClick={handleStartSolving}
              >
                Start Solving
              </button>
            )}

            {selectedQuestion.type === "mcq" && (
              <MCQAnswer
                options={selectedQuestion.options || []}
                selected={mcqAnswer}
                onChange={setMcqAnswer}
              />
            )}

            {selectedQuestion.type === "descriptive" && (
              <DescriptiveAnswer
                value={descriptiveAnswer}
                onChange={setDescriptiveAnswer}
              />
            )}

            {selectedQuestion.type !== "coding" && (
              <button
                onClick={handleSubmitAnswer}
                className="mt-4 bg-mediumRed hover:bg-lightRed text-white font-bold py-2 px-4 rounded"
                disabled={
                  (selectedQuestion.type === "mcq" && !mcqAnswer) ||
                  (selectedQuestion.type === "descriptive" &&
                    descriptiveAnswer.trim() === "")
                }
              >
                Submit Answer
              </button>
            )}
          </>
        ) : (
          <p className="text-gray-300">Select a question to get started.</p>
        )}
      </div>
    </div>
  );
};

export default TestEnvironmentPage;
