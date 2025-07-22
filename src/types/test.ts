export interface Question {
  id: number;
  type: 'vocabulary' | 'grammar' | 'reading';
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface TestSection {
  name: string;
  questions: Question[];
  timeLimit: number; // in minutes
}

export interface TestResult {
  sectionName: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: (number | null)[];
}