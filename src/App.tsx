import React, { useState } from 'react';
import { Home } from './components/Home';
import { TestSection } from './components/TestSection';
import { Results } from './components/Results';
import { testSections } from './data/questions';
import { TestResult } from './types/test';

type AppState = 'home' | 'testing' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [results, setResults] = useState<TestResult[]>([]);

  const handleStartTest = () => {
    setCurrentState('testing');
    setCurrentSectionIndex(0);
    setResults([]);
  };

  const handleSectionComplete = (result: TestResult) => {
    const newResults = [...results, result];
    setResults(newResults);

    if (currentSectionIndex < testSections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      setCurrentState('results');
    }
  };

  const handleRestart = () => {
    setCurrentState('home');
    setCurrentSectionIndex(0);
    setResults([]);
  };

  if (currentState === 'home') {
    return <Home onStartTest={handleStartTest} />;
  }

  if (currentState === 'testing') {
    return (
      <TestSection
        section={testSections[currentSectionIndex]}
        onComplete={handleSectionComplete}
      />
    );
  }

  if (currentState === 'results') {
    return (
      <Results
        results={results}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}

export default App;