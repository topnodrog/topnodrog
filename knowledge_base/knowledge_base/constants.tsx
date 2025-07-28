
import React from 'react';
import { NavigationItem } from './types';
import BlockchainIcon from './components/icons/BlockchainIcon';
import CodeIcon from './components/icons/CodeIcon';
import PlatformIcon from './components/icons/PlatformIcon';
import SecurityIcon from './components/icons/SecurityIcon';
import DAppIcon from './components/icons/DAppIcon';
import AiIcon from './components/icons/AiIcon';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'foundations',
    title: 'Foundational Blockchain Concepts',
    description: 'Core principles of decentralization, cryptography, and consensus mechanisms.',
    icon: <BlockchainIcon className="h-5 w-5 mr-3" />,
    promptSuggestion: 'Explain the difference between Proof-of-Work and Proof-of-Stake.'
  },
  {
    id: 'languages',
    title: 'Core Programming Languages',
    description: 'Training on Solidity, Rust, and development environments like Hardhat.',
    icon: <CodeIcon className="h-5 w-5 mr-3" />,
    promptSuggestion: 'Provide a simple "Hello World" smart contract in Solidity using Hardhat.'
  },
  {
    id: 'platforms',
    title: 'Major Blockchain Platforms',
    description: 'Deep dive into Ethereum, Solana, Polkadot and their ecosystems.',
    icon: <PlatformIcon className="h-5 w-5 mr-3" />,
    promptSuggestion: 'Compare the transaction finality of Ethereum versus Solana.'
  },
  {
    id: 'security',
    title: 'Smart Contract Security',
    description: 'Best practices, known vulnerabilities, and auditing techniques.',
    icon: <SecurityIcon className="h-5 w-5 mr-3" />,
    promptSuggestion: 'What is a reentrancy attack and how can it be prevented in Solidity?'
  },
  {
    id: 'dapps',
    title: 'dApp Architecture',
    description: 'Frontend integration with Web3.js/Ethers.js and decentralized storage.',
    icon: <DAppIcon className="h-5 w-5 mr-3" />,
    promptSuggestion: 'Describe the architecture of a typical dApp using React and Ethers.js.'
  },
  {
    id: 'ai-blockchain',
    title: 'AI & Blockchain Intersection',
    description: 'Exploring AI-driven DAOs and decentralized AI marketplaces.',
    icon: <AiIcon className="h-5 w-5 mr-3" />,
    promptSuggestion: 'How can blockchain enhance the transparency of AI models?'
  },
];
