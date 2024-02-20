const { GoogleGenerativeAI } = require("@google/generative-ai");

let storedData = {};

async function promptGemeni(prompt, panelId = null) {
  console.log('promptGemeni function called');
  try {
    const currentDate = new Date();
    const twentyFourHoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
    
    // Gross way to clear storage. 
    if (1==2){
      localStorage.removeItem('storedData');
      return "Successfully removed storedData from localStorage. Gemeni is disabled at the moment."
    }

    localStorage.removeItem('storedData');

    if (panelId !== null) {
      // Load storedData from localStorage
      const data = localStorage.getItem('storedData');
      storedData = data ? JSON.parse(data) : {};

      const key = `${panelId}_${prompt}`;

      if (storedData[key] && new Date(storedData[key].stored_date) > twentyFourHoursAgo) {
        // If the stored prompt exists and the stored date is within the past 24 hours, return the stored response
        console.log('Storage exists');
        return storedData[key].stored_response;
      }
    }

    // Debugging wrapper to facilitate disabling a call to Gemeni.js
    if (1==2) {
    // Send the prompt to Gemeni and store the response
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMENI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    }else{
      const text = "This is test text. Gemeni is disabled at the moment";
    }

    if (panelId !== null) {
      // Update the stored data
      storedData[`${panelId}_${prompt}`] = {
        stored_response: text,
        stored_date: currentDate
      };

      // Save storedData to localStorage
      localStorage.setItem('storedData', JSON.stringify(storedData));
    }

    return text;
  } catch (error) {
    console.error('Error:', error);
  }
}

export { promptGemeni };