import React, { useState, FormEvent, useEffect } from 'react';
import { NavigationItem, GeminiServiceResponse } from '../types';
import SendIcon from './icons/SendIcon';
import LinkIcon from './icons/LinkIcon';

interface MainContentProps {
  topic: NavigationItem;
  response: GeminiServiceResponse | null;
  isLoading: boolean;
  onSubmit: (query: string) => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center space-x-2">
    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
    <span className="text-brand-text-secondary ml-2">Generating...</span>
  </div>
);

const MainContent: React.FC<MainContentProps> = ({ topic, response, isLoading, onSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(topic.promptSuggestion);
  }, [topic]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query);
    }
  };
  
  const formattedText = response?.text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
                                      .replace(/\* (.*?)(?=\n\* |\n\n|$)/g, '<li class="ml-6 mb-2">$1</li>')
                                      .replace(/`(.*?)`/g, '<code class="bg-brand-secondary text-amber-400 px-1.5 py-0.5 rounded-md font-mono text-sm">$1</code>');

  return (
    <main className="flex-1 flex flex-col h-screen">
      <header className="border-b border-brand-border p-6">
        <h2 className="text-2xl font-bold text-white">{topic.title}</h2>
        <p className="text-brand-text-secondary mt-1">{topic.description}</p>
      </header>
      
      <div className="flex-1 overflow-y-auto p-8 text-brand-text space-y-8">
        {!response && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full text-center">
             <div className="w-24 h-24 text-gray-600 mb-4">
                {React.cloneElement(topic.icon, { className: 'w-full h-full' })}
            </div>
            <h3 className="text-xl font-semibold text-white">Ask about {topic.title}</h3>
            <p className="text-brand-text-secondary mt-2 max-w-md">
              Enter a query below or use the suggested prompt to generate knowledge for the AI training base.
            </p>
          </div>
        )}

        {isLoading && !response && <div className="flex items-center justify-center h-full"><LoadingSpinner /></div>}
        
        {response && (
            <div>
                <div className="prose prose-invert max-w-none prose-p:text-brand-text prose-headings:text-white prose-li:text-brand-text" dangerouslySetInnerHTML={{ __html: formattedText }}></div>

                {response.sources && response.sources.length > 0 && (
                <div className="mt-10 pt-6 border-t border-brand-border">
                    <h4 className="text-lg font-semibold text-white flex items-center mb-4">
                        <LinkIcon className="w-5 h-5 mr-3 text-brand-accent" />
                        Sources
                    </h4>
                    <ul className="space-y-2">
                    {response.sources.filter(source => source.web?.uri).map((source, index) => (
                        <li key={index} className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">●</span>
                        <a
                            href={source.web.uri!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-accent hover:text-brand-accent-hover transition-colors truncate"
                            title={source.web.uri}
                        >
                            {source.web.title || source.web.uri}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
        )}
      </div>

      <div className="p-6 border-t border-brand-border bg-brand-primary">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Ask a question about ${topic.title}...`}
            className="w-full bg-brand-secondary border border-brand-border rounded-lg text-brand-text p-4 pr-16 resize-none focus:ring-2 focus:ring-brand-accent focus:outline-none transition-shadow"
            rows={2}
            disabled={isLoading}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                }
            }}
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-accent disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-brand-accent-hover transition-colors"
          >
            {isLoading ? <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div> : <SendIcon className="w-5 h-5 text-white" />}
          </button>
        </form>
      </div>
    </main>
  );
};

export default MainContent;