// This file is responsible for handling the Gemeni API requests
const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = process.env.REACT_APP_GEMENI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


async function promptGemeni(prompt) { //Accept the prompt as a paramater
  try {
    // For text-only input, use the gemini-pro model
    //const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    //const result = await model.generateContent(prompt);

    //const response = await result.response;

    //const text = response.text();

    const text = "This is test text. Gemeni is disabled at the moment";

    return text;
  } catch (error) {
    console.error('Error:', error); // Log any errors that occur
  }
}

export { promptGemeni };
