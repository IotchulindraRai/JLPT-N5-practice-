import React, { useState, useEffect } from 'react';
import { Question } from './Question';
import { Timer } from './Timer';
import { TestSection as TestSectionType, TestResult } from '../types/test';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface TestSectionProps {
  section: TestSectionType;
  onComplete: (result: TestResult) => void;
}

export const TestSection: React.FC<TestSectionProps> = ({ section, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(section.questions.length).fill(null));
  const [startTime] = useState(Date.now());
  const [isActive, setIsActive] = useState(true);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleComplete = () => {
    setIsActive(false);
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // in minutes
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === section.questions[index].correct ? 1 : 0);
    }, 0);

    const result: TestResult = {
      sectionName: section.name,
      score,
      totalQuestions: section.questions.length,
      timeSpent,
      answers
    };

    onComplete(result);
  };

  const handleTimeUp = () => {
    handleComplete();
  };

  const answeredQuestions = answers.filter(answer => answer !== null).length;
  const progress = (answeredQuestions / section.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{section.name}</h2>
            <Timer
              initialTime={section.timeLimit * 60}
              onTimeUp={handleTimeUp}
              isActive={isActive}
            />
          </div>
          
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Question {currentQuestion + 1} of {section.questions.length}</span>
              <span>{answeredQuestions} answered</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <Question
            question={section.questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
            showExplanation={false}
          />
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {section.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors duration-200 ${
                    index === currentQuestion
                      ? 'bg-blue-600 text-white'
                      : answers[index] !== null
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestion === section.questions.length - 1 ? (
              <button
                onClick={handleComplete}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <CheckCircle size={20} />
                Complete
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Next
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};