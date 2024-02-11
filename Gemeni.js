import axios from 'axios';

const gemeniApiKey = 'YOUR_gemeni_API_KEY'; // Replace with your actual API key
const gemeniBaseUrl = 'https://api.openai.com/v1/chat/completions'; //Replace withactual  base url

const querygemeni = async (prompt) => {
  try {
    const response = await axios.post(gemeniBaseUrl, {
      model: 'text-davinci-003',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${gemeniApiKey}`,
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching response from gemeni:', error);
    return 'Error: Could not retrieve response from gemeni.';
  }
};