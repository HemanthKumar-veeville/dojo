// src/pages/EditorPage.tsx
import React, { useState } from "react";
import ProblemStatement from "../components/ProblemStatement";
import CodeEditor from "../components/CodeEditor";
import { useCodeExecution } from "../hooks/useCodeExecution";
import skeletons from "../constants/skeletons";

const EditorPage: React.FC = () => {
  const [language, setLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string>(skeletons[language]);
  const [input, setInput] = useState<string>("");

  const { output, error, loading, executionTime, runCode } = useCodeExecution();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(skeletons[newLanguage] || "");
  };

  const handleRunCode = () => {
    const codeWithInput = code.replace("{{input}}", input);
    runCode({
      source_code: codeWithInput,
      language_id: getLanguageId(language),
      stdin: input,
    });
  };

  const getLanguageId = (lang: string): number => {
    switch (lang) {
      case "python":
        return 71;
      case "javascript":
        return 63;
      case "cpp":
        return 54;
      default:
        return 63;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Column - Problem Statement (Scrollable) */}
      <div className="w-1/2 h-full overflow-y-auto border-r border-gray-700 scrollable">
        <ProblemStatement />
      </div>

      {/* Right Column - Code Editor (Scrollable) */}
      <div className="w-1/2 h-full overflow-y-auto scrollable">
        <CodeEditor
          language={language}
          code={code}
          input={input}
          output={output}
          error={error}
          executionTime={executionTime} // Pass executionTime to CodeEditor
          loading={loading}
          onChange={(newCode) => setCode(newCode || "")}
          onLanguageChange={handleLanguageChange}
          onRunCode={handleRunCode}
          onInputChange={setInput}
        />
      </div>
    </div>
  );
};

export default EditorPage;
