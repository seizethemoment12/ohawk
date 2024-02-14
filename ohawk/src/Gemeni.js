// This file is responsible for handling the Gemeni API requests
const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log('Added required library');
const apiKey = process.env.REACT_APP_GEMENI_API_KEY;
console.log('API Key:', apiKey);
const genAI = new GoogleGenerativeAI(apiKey);
console.log('Created Process with API key:', apiKey);

async function promptGemeni(prompt) { //Accept the prompt as a paramater
  try {
    console.log('In Try. Prompt is ', prompt);

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    console.log('Created model');


    const result = await model.generateContent(prompt);
    console.log('Sent prompt and should have result.');
    console.log('Result:', result); // Log the result

    const response = await result.response;
    console.log('Should have response.');
    console.log('Response:', response); // Log the response

    const text = response.text();
    console.log('Text:', text); // Log the text

    return text;
  } catch (error) {
    console.error('Error:', error); // Log any errors that occur
  }
}

export { promptGemeni };
