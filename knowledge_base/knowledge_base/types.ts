import { ReactElement } from 'react';

export interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: ReactElement<{ className?: string }>;
  promptSuggestion: string;
}

export interface WebChunk {
  uri?: string;
  title?: string;
}

export interface GroundingChunk {
  web: WebChunk;
}

export interface GeminiServiceResponse {
  text: string;
  sources: GroundingChunk[];
}
