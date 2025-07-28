
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiServiceResponse, GroundingChunk } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateKnowledge = async (
    query: string,
    topicTitle: string
): Promise<GeminiServiceResponse> => {
    try {
        const prompt = `
        System Instruction: You are an expert AI assistant specialized in Web3 and blockchain technology. 
        Your purpose is to provide comprehensive, accurate, and structured information for a knowledge base designed to train other AIs.
        Use the provided search results from Google Search to ground your answer in facts and provide up-to-date information.
        Your answer should be well-structured, easy to read, and formatted using markdown.

        Topic Area: "${topicTitle}"
        User Query: "${query}"

        Generate a detailed and informative response based on the query within the context of the topic area.
        `;

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });

        const text = response.text;
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
        const sources: GroundingChunk[] = groundingMetadata?.groundingChunks || [];

        return { text, sources };

    } catch (error) {
        console.error("Error generating knowledge with Gemini:", error);
        if (error instanceof Error) {
            return {
                text: `An error occurred while fetching information: ${error.message}. Please check the console for more details.`,
                sources: []
            };
        }
        return {
            text: 'An unknown error occurred.',
            sources: []
        };
    }
};
