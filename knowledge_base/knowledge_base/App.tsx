
import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { NAVIGATION_ITEMS } from './constants';
import { GeminiServiceResponse } from './types';
import { generateKnowledge } from './services/geminiService';

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(NAVIGATION_ITEMS[0].id);
  const [response, setResponse] = useState<GeminiServiceResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const activeTopic = NAVIGATION_ITEMS.find(item => item.id === activeTopicId) || NAVIGATION_ITEMS[0];

  const handleSelectTopic = useCallback((id: string) => {
    setActiveTopicId(id);
    setResponse(null);
    setError(null);
  }, []);
  
  // A version of handleSelectTopic that also updates the query in MainContent.
  // This is passed to the sidebar to allow changing the prompt when a topic is clicked.
  const handleSelectTopicAndSetPrompt = useCallback((id: string) => {
    handleSelectTopic(id);
    // The query state itself is managed within MainContent, but this action
    // triggers its useEffect to update the query from the new topic's promptSuggestion.
  }, [handleSelectTopic]);


  const handleSubmitQuery = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    const result = await generateKnowledge(query, activeTopic.title);
    
    if (result.text.startsWith('An error occurred')) {
      setError(result.text);
    }
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen font-sans">
      <Sidebar
        items={NAVIGATION_ITEMS}
        activeTopic={activeTopicId}
        onSelectTopic={(id, prompt) => handleSelectTopicAndSetPrompt(id)}
      />
      <MainContent
        topic={activeTopic}
        response={response}
        isLoading={isLoading}
        onSubmit={handleSubmitQuery}
      />
    </div>
  );
};

export default App;
