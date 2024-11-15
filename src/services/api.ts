// src/services/api.ts
import axios from 'axios'
import { Judge0Submission, Judge0Response } from '../types/judge0'

const API_URL = 'https://judge0-ce.p.rapidapi.com/submissions'
const API_KEY = import.meta.env.VITE_JUDGE0_API_KEY || "d6d997cb70msheac47913e88a3e0p18e5c7jsncd24189c876b"
const API_HOST = import.meta.env.VITE_JUDGE0_API_HOST || "judge0-ce.p.rapidapi.com"

// Function to poll for execution result using the token
const getExecutionResult = async (token: string): Promise<Judge0Response> => {
  try {
    const response = await axios.get(`${API_URL}/${token}`, {
      params: { fields: '*' },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching execution result:", error)
    throw error
  }
}

// Main function to execute code and get the result
export const executeCode = async (submission: Judge0Submission): Promise<Judge0Response> => {
  try {
    // Step 1: Submit the code and get the token
    const response = await axios.post(API_URL, submission, {
      params: { fields: '*' },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
        'Content-Type': 'application/json',
      },
    })
    const token = response.data.token

    // Step 2: Poll for the result
    let result: Judge0Response
    while (true) {
      result = await getExecutionResult(token)
      if (result.status && result.status.description !== 'In Queue' && result.status.description !== 'Processing') {
        break // Result is ready
      }
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second before polling again
    }

    return result
  } catch (error) {
    console.error("Error executing code:", error)
    throw error
  }
}
