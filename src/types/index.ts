export interface TestCase {
    input: string;
    output: string;
  }
  
  export interface Question {
    id: string;
    title: string;
    description: string;
    testCases: TestCase[]; // Consistent structure for test cases
  }
  