// src/components/CodeEditor.tsx
import React from "react";
import MonacoEditor from "@monaco-editor/react";
import { useCodeExecution } from "../hooks/useCodeExecution";

interface CodeEditorProps {
  language: string;
  code: string;
  input: string;
  output: string | null;
  error: string | null;
  executionTime: string | null; // New prop for execution time
  loading: boolean;
  onChange: (value: string | undefined) => void;
  onLanguageChange: (language: string) => void;
  onRunCode: () => void;
  onInputChange: (input: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  code,
  input,
  output,
  error,
  executionTime, // Added execution time to props
  loading,
  onChange,
  onLanguageChange,
  onRunCode,
  onInputChange,
}) => {
  return (
    <div className="flex flex-col h-full bg-darkRed text-white">
      {/* Header Section with Language Selector and Run Code Button */}
      <div className="flex items-center justify-between px-6 py-4 bg-deepMaroon border-b border-gray-600">
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="bg-deepMaroon text-white p-2 rounded border border-gray-500"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
        <button
          onClick={onRunCode}
          className="bg-mediumRed hover:bg-lightRed text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          disabled={loading}
        >
          {loading ? "Running..." : "Run Code"}
        </button>
      </div>

      {/* Monaco Editor Section */}
      <div className="flex-grow">
        <MonacoEditor
          height="calc(100vh - 300px)"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={onChange}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
        />
      </div>

      {/* Input and Output Section in Flex Row */}
      <div className="px-6 py-4 bg-deepMaroon border-t border-gray-600 flex space-x-4">
        {/* Input Section */}
        <div className="w-1/2">
          <label className="block text-lightRed font-semibold mb-2">
            Input:
          </label>
          <textarea
            className="bg-darkRed text-white w-full p-3 rounded border border-gray-500 placeholder-gray-400"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Enter input here"
            style={{ minHeight: "100px" }}
          />
        </div>

        {/* Output Section */}
        <div className="w-1/2">
          <h2 className="text-lg font-semibold text-lightRed mb-2">Output:</h2>
          <pre className="bg-darkRed p-3 rounded whitespace-pre-wrap text-white border border-gray-500">
            {error ? (
              <span className="text-red-400">{error}</span>
            ) : (
              output || <span className="text-gray-400">No output</span>
            )}
          </pre>

          {/* Display Execution Time */}
          {executionTime && (
            <p className="text-sm text-gray-300 mt-2">
              <strong>Execution Time:</strong> {executionTime} seconds
            </p>
          )}
        </div>
      </div>

      {/* Submit Code Button Section */}
      <div className="px-6 py-4 bg-deepMaroon flex justify-end border-t border-gray-600">
        <button
          className="bg-mediumRed hover:bg-lightRed text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          disabled={loading}
        >
          Submit Code
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
