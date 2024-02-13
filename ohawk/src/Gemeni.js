// This file is responsible for handling the Gemeni API requests
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMENI_API_KEY);

async function promptGemeni(prompt) { //Accept the prompt as a paramater
  console.log('promptGemeni function called'); 

  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(prompt);
    console.log('Result:', result); // Log the result

    const response = await result.response;
    console.log('Response:', response); // Log the response

    const text = response.text();
    console.log('Text:', text); // Log the text

    return text;
  } catch (error) {
    console.error('Error:', error); // Log any errors that occur
  }
}

export { promptGemeni };
