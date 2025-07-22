import React from 'react';
import { BookOpen, Clock, Target, Award, Play } from 'lucide-react';

interface HomeProps {
  onStartTest: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStartTest }) => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">JLPT N5 Practice Test</h1>
              <p className="text-gray-600">Japanese Language Proficiency Test - Beginner Level</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Master Japanese with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> N5</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Test your Japanese language skills with our comprehensive JLPT N5 practice exam. 
              Perfect for beginners ready to take their first step in Japanese proficiency.
            </p>
          </div>

          <button
            onClick={onStartTest}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Play size={24} />
            Start Practice Test
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">What You'll Practice</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Vocabulary (語彙)</h4>
              <p className="text-gray-600 leading-relaxed">
                Test your knowledge of basic Japanese words and expressions used in daily life. 
                Covers essential N5 vocabulary with real-world contexts.
              </p>
              <div className="mt-4 text-sm text-blue-600 font-semibold">20 Questions • 35 minutes</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Grammar (文法)</h4>
              <p className="text-gray-600 leading-relaxed">
                Master fundamental Japanese grammar patterns including particles, verb forms, 
                and essential sentence structures for N5 level.
              </p>
              <div className="mt-4 text-sm text-green-600 font-semibold">20 Questions • 40 minutes</div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-purple-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Reading (読解)</h4>
              <p className="text-gray-600 leading-relaxed">
                Practice reading comprehension with short passages and simple texts. 
                Comprehensive reading practice with various text types and contexts.
              </p>
              <div className="mt-4 text-sm text-purple-600 font-semibold">20 Questions • 45 minutes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Test Information</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-800">Test Duration</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Total time: 120 minutes</li>
                <li>• Vocabulary: 35 minutes</li>
                <li>• Grammar: 40 minutes</li>
                <li>• Reading: 45 minutes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-green-600" size={24} />
                <h4 className="text-xl font-bold text-gray-800">Scoring</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 60 total questions</li>
                <li>• Pass score: 60% (36/60)</li>
                <li>• Detailed explanations</li>
                <li>• Performance breakdown</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 inline-block">
              <p className="text-yellow-800 font-semibold">
                💡 Tip: This practice test simulates the real JLPT N5 exam format and difficulty level.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-300">
          Developed by{' '}
          <a
            href="https://np.linkedin.com/in/chulindra-rai-a51308206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
          >
            Chulindra Rai
          </a>
        </p>
      </div>
    </footer>
    </>
  );
};