import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionList from "../components/QuestionList";
import QuestionPreview from "../components/QuestionPreview";
import { Question } from "../types"; // Import shared type

const QuestionPreviewPage: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const navigate = useNavigate();

  const handleSelectQuestion = (question: Question) => {
    setSelectedQuestion(question);
  };

  const handleStartSolving = () => {
    if (selectedQuestion) {
      navigate("/editor", {
        state: {
          questionId: selectedQuestion.id,
          title: selectedQuestion.title,
          description: selectedQuestion.description,
          testCases: selectedQuestion.testCases,
        },
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-darkRed text-white">
      {/* Left Section: Question List */}
      <div className="w-1/3 border-r border-gray-700 p-4">
        <h2 className="text-xl font-bold mb-4">Questions</h2>
        <QuestionList onSelectQuestion={handleSelectQuestion} />
      </div>

      {/* Right Section: Question Preview */}
      <div className="w-2/3 p-4">
        {selectedQuestion ? (
          <>
            <QuestionPreview question={selectedQuestion} />
            <button
              onClick={handleStartSolving}
              className="mt-4 bg-mediumRed hover:bg-lightRed text-white font-bold py-2 px-4 rounded"
            >
              Start Solving
            </button>
          </>
        ) : (
          <p className="text-center text-gray-300">
            Select a question to preview it.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestionPreviewPage;
