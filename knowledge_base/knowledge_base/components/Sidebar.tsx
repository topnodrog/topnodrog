
import React from 'react';
import { NavigationItem } from '../types';

interface SidebarProps {
  items: NavigationItem[];
  activeTopic: string;
  onSelectTopic: (id: string, prompt: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeTopic, onSelectTopic }) => {
  return (
    <aside className="w-80 bg-brand-secondary border-r border-brand-border p-6 flex flex-col">
      <div className="flex items-center mb-8">
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3 text-brand-accent">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 0C6.268 0 0 6.268 0 14C0 21.732 6.268 28 14 28C21.732 28 28 21.732 28 14C28 6.268 21.732 0 14 0ZM11.1667 21.0117L5.83333 15.6783L7.96167 13.55L11.1667 16.755L20.0383 7.88333L22.1667 10.0117L11.1667 21.0117Z" fill="currentColor"/>
        </svg>
        <h1 className="text-xl font-bold text-white">Web3 AI Trainer</h1>
      </div>
      <nav className="flex-grow">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => onSelectTopic(item.id, item.promptSuggestion)}
                className={`w-full text-left flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  activeTopic === item.id
                    ? 'bg-brand-accent text-white'
                    : 'text-brand-text-secondary hover:bg-gray-700/50 hover:text-brand-text'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-xs text-brand-text-secondary mt-6">
        <p>&copy; {new Date().getFullYear()} AI Prodigy Initiative</p>
        <p>Powered by Gemini</p>
      </div>
    </aside>
  );
};

export default Sidebar;
