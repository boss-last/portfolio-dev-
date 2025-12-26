
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askAssistant = async (question: string, language: 'fr' | 'en') => {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `
    You are an AI assistant for a Full Stack Developer's portfolio. 
    The developer's name is Alex. 
    Skills: React, Node.js, PHP, Laravel, Python, MySQL, MongoDB, Tailwind.
    Tools: VS Code, Cursor, Git.
    Be professional, helpful, and answer in ${language === 'fr' ? 'French' : 'English'}.
    Mention the 4 specific projects if asked: LaraShop (Laravel), TaskFlow (React/Node), DataSpy (Python), and DevSync (React/TS).
    Keep answers concise.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || (language === 'fr' ? "Je ne peux pas répondre pour le moment." : "I cannot answer at the moment.");
  } catch (error) {
    console.error("Gemini Error:", error);
    return language === 'fr' ? "Désolé, une erreur s'est produite." : "Sorry, an error occurred.";
  }
};
