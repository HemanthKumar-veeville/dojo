// src/hooks/useCodeExecution.ts
import { useState } from "react";
import { executeCode } from "../services/api";
import { Judge0Submission } from "../types/judge0";

export const useCodeExecution = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [executionTime, setExecutionTime] = useState<string | null>(null);

  const runCode = async (submission: Judge0Submission) => {
    setLoading(true);
    setOutput(null);
    setError(null);
    setExecutionTime(null);

    try {
      // Call the centralized executeCode function
      const result = await executeCode(submission);

      // Handle the output and execution time
      if (result.stdout) {
        setOutput(result.stdout);
        setExecutionTime(result.time);
      } else if (result.stderr) {
        setError(result.stderr);
      } else if (result.compile_output) {
        setError(result.compile_output);
      }
    } catch (err) {
      setError("Execution failed.");
    } finally {
      setLoading(false);
    }
  };

  return { output, error, loading, executionTime, runCode };
};
