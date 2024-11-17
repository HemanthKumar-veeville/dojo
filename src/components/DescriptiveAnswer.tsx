import React from "react";

interface DescriptiveAnswerProps {
  value: string;
  onChange: (value: string) => void;
}

const DescriptiveAnswer: React.FC<DescriptiveAnswerProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Write your answer:</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 bg-darkRed text-white rounded border border-gray-600"
        rows={5}
        placeholder="Type your answer here..."
      />
    </div>
  );
};

export default DescriptiveAnswer;
