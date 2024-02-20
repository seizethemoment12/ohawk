let storedData = {
  stored_prompt: null,
  stored_response: null,
  stored_date: null
};

async function promptGemeni(prompt) {
  try {
    const currentDate = new Date();
    const twentyFourHoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    if (storedData.stored_prompt === prompt && storedData.stored_date > twentyFourHoursAgo) {
      // If the stored prompt is the same as the current prompt and the stored date is within the past 24 hours, return the stored response
      return storedData.stored_response;
    } else {
      // Otherwise, send the prompt to Gemeni and store the response
      // const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      // const result = await model.generateContent(prompt);
      // const response = await result.response;
      // const text = response.text();

      const text = "This is test text. Gemeni is disabled at the moment";

      // Update the stored data
      storedData = {
        stored_prompt: prompt,
        stored_response: text,
        stored_date: currentDate
      };

      return text;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export { promptGemeni };