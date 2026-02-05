
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askAssistant = async (question: string, language: 'fr' | 'en') => {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `
    You are an AI assistant for Bamba Amara Christian, a Full Stack Developer.
    
    Technical Expertise (Mastered very well): 
    - HTML/CSS, PHP, Bootstrap, jQuery, XML, C++. 
    - He is highly proficient in these.

    Intermediate/Learning (A bit): 
    - React, Node.js, TypeScript, Tailwind CSS, Python, MySQL, Laravel, Power BI.
    - He has working knowledge of these but is still growing his expertise.

    Projects: LaraShop (Laravel), TaskFlow (React/Node), DataSpy (Python), and DevSync (React/TS).
    
    Guidelines:
    - Be professional and helpful.
    - Answer in ${language === 'fr' ? 'French' : 'English'}.
    - Keep answers concise.
    - If asked about his best skills, emphasize PHP, C++, and the classic web stack (HTML/CSS/JS/jQuery).
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
