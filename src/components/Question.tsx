import React from 'react';
import { Question as QuestionType } from '../types/test';

interface QuestionProps {
  question: QuestionType;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showExplanation: boolean;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correct;
          const isIncorrect = showExplanation && isSelected && !isCorrect;

          let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md ';
          
          if (showExplanation) {
            if (isCorrect) {
              buttonClass += 'border-green-500 bg-green-50 text-green-800';
            } else if (isIncorrect) {
              buttonClass += 'border-red-500 bg-red-50 text-red-800';
            } else {
              buttonClass += 'border-gray-200 bg-gray-50 text-gray-600';
            }
          } else if (isSelected) {
            buttonClass += 'border-blue-500 bg-blue-50 text-blue-800 shadow-md';
          } else {
            buttonClass += 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50';
          }

          return (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              disabled={showExplanation}
              className={buttonClass}
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-lg">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 font-semibold">💡</span>
            <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};