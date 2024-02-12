import axios from 'axios';

const gemeniApiKey = process.env.GEMENI_API_KEY;
const gemeniBaseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key='; //Replace withactual  base url

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