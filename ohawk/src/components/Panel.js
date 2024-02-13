import React, { useState, useEffect } from 'react';
import { promptGemeni } from '../Gemeni.js'; 

function Panel({ data }) {
  const [response, setResponse] = useState('Loading...');
  console.log('Panel function called'); 

  useEffect(() => {
    const fetchData = async () => {
      const result = await promptGemeni(data.data);
      setResponse(result);
    };

    fetchData();
  }, [data]);

  // Render the response
  return (
    <div style={{ width: `${data.size}%` }}>
      <h2>{data.id}</h2>
      <p>{response}</p>
    </div>
  );
}

export default Panel;