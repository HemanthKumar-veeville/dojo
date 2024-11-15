// src/types/judge0.d.ts
export interface Judge0Submission {
    source_code: string
    language_id: number
    stdin: string
  }
  
  export interface Judge0Response {
    stdout: string | null
    stderr: string | null
    compile_output: string | null
    status: { description: string }
    time: string | null
  }
  