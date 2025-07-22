import React, { useState } from 'react';
import { TestResult } from '../types/test';
import { testSections } from '../data/questions';
import { Question } from './Question';
import { Trophy, Clock, Target, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface ResultsProps {
  results: TestResult[];
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  const [currentReview, setCurrentReview] = useState<{ sectionIndex: number; questionIndex: number } | null>(null);

  const totalScore = results.reduce((acc, result) => acc + result.score, 0);
  const totalQuestions = results.reduce((acc, result) => acc + result.totalQuestions, 0);
  const totalTime = results.reduce((acc, result) => acc + result.timeSpent, 0);
  const percentage = Math.round((totalScore / totalQuestions) * 100);

  const getGrade = (percentage: number) => {
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const gradeInfo = getGrade(percentage);

  const handleQuestionReview = (sectionIndex: number, questionIndex: number) => {
    setCurrentReview({ sectionIndex, questionIndex });
  };

  if (currentReview) {
    const section = testSections[currentReview.sectionIndex];
    const question = section.questions[currentReview.questionIndex];
    const result = results[currentReview.sectionIndex];
    const userAnswer = result.answers[currentReview.questionIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Question Review</h2>
                <p className="text-gray-600">
                  {section.name} - Question {currentReview.questionIndex + 1}
                </p>
              </div>
              <button
                onClick={() => setCurrentReview(null)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <ChevronLeft size={20} />
                Back to Results
              </button>
            </div>
          </div>

          <Question
            question={question}
            selectedAnswer={userAnswer}
            onAnswerSelect={() => {}}
            showExplanation={true}
          />

          <div className="mt-6 flex justify-between">
            <button
              onClick={() => {
                if (currentReview.questionIndex > 0) {
                  setCurrentReview({
                    ...currentReview,
                    questionIndex: currentReview.questionIndex - 1
                  });
                } else if (currentReview.sectionIndex > 0) {
                  const prevSection = testSections[currentReview.sectionIndex - 1];
                  setCurrentReview({
                    sectionIndex: currentReview.sectionIndex - 1,
                    questionIndex: prevSection.questions.length - 1
                  });
                }
              }}
              disabled={currentReview.sectionIndex === 0 && currentReview.questionIndex === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={() => {
                const currentSection = testSections[currentReview.sectionIndex];
                if (currentReview.questionIndex < currentSection.questions.length - 1) {
                  setCurrentReview({
                    ...currentReview,
                    questionIndex: currentReview.questionIndex + 1
                  });
                } else if (currentReview.sectionIndex < testSections.length - 1) {
                  setCurrentReview({
                    sectionIndex: currentReview.sectionIndex + 1,
                    questionIndex: 0
                  });
                }
              }}
              disabled={
                currentReview.sectionIndex === testSections.length - 1 &&
                currentReview.questionIndex === testSections[currentReview.sectionIndex].questions.length - 1
              }
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Overall Results */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold mb-4 ${gradeInfo.bg} ${gradeInfo.color}`}>
              {gradeInfo.grade}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Test Complete!</h2>
            <p className="text-xl text-gray-600">Your JLPT N5 Score: {percentage}%</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Target className="text-blue-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-blue-600">{totalScore}/{totalQuestions}</div>
              <div className="text-gray-600">Questions Correct</div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="text-green-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-green-600">{percentage}%</div>
              <div className="text-gray-600">Overall Score</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-purple-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-purple-600">{totalTime}m</div>
              <div className="text-gray-600">Total Time</div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onRestart}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
            >
              <RotateCcw size={20} />
              Take Test Again
            </button>
          </div>
        </div>

        {/* Section Results */}
        <div className="space-y-6">
          {results.map((result, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">{result.sectionName}</h3>
                <div className="text-lg font-semibold text-gray-600">
                  {Math.round((result.score / result.totalQuestions) * 100)}%
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{result.score} correct out of {result.totalQuestions}</span>
                  <span>{result.timeSpent} minutes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(result.score / result.totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {result.answers.map((answer, questionIndex) => {
                  const isCorrect = answer === testSections[sectionIndex].questions[questionIndex].correct;
                  return (
                    <button
                      key={questionIndex}
                      onClick={() => handleQuestionReview(sectionIndex, questionIndex)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-colors duration-200 ${
                        isCorrect
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : answer === null
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          : 'bg-red-100 text-red-700 hover:bg-red-200'
                      }`}
                    >
                      {questionIndex + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};